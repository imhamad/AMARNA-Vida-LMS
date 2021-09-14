<?php

namespace Drupal\opigno_messaging\Controller;

use Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException;
use Drupal\Component\Plugin\Exception\PluginNotFoundException;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\AppendCommand;
use Drupal\Core\Ajax\InvokeCommand;
use Drupal\Core\Ajax\RemoveCommand;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Connection;
use Drupal\Core\Entity\EntityFormBuilderInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\Core\Form\FormState;
use Drupal\opigno_messaging\Form\OpignoPrivateMessageThreadForm;
use Drupal\private_message\Entity\PrivateMessageThreadInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * The Opigno messaging controller.
 *
 * @package Drupal\opigno_messaging\Controller
 */
class OpignoMessageThreadController extends ControllerBase {

  /**
   * The DB connection service.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * The private messages storage.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface|null
   */
  protected $messageStorage = NULL;

  /**
   * OpignoMessageThreadController constructor.
   *
   * @param \Drupal\Core\Database\Connection $database
   *   The DB connection service.
   * @param \Drupal\Core\Form\FormBuilderInterface $form_builder
   *   The form builder service.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager service.
   * @param \Drupal\Core\Entity\EntityFormBuilderInterface $entity_form_builder
   *   The entity form builder service.
   */
  public function __construct(
    Connection $database,
    FormBuilderInterface $form_builder,
    EntityTypeManagerInterface $entity_type_manager,
    EntityFormBuilderInterface $entity_form_builder
  ) {
    $this->database = $database;
    $this->formBuilder = $form_builder;
    $this->entityFormBuilder = $entity_form_builder;

    try {
      $this->messageStorage = $entity_type_manager->getStorage('private_message');
    }
    catch (PluginNotFoundException | InvalidPluginDefinitionException $e) {
      watchdog_exception('opigno_messaging_exception', $e);
    }
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('database'),
      $container->get('form_builder'),
      $container->get('entity_type.manager'),
      $container->get('entity.form_builder')
    );
  }

  /**
   * Prepare the AJAX response to display the thread add/edit form.
   *
   * @param int $tid
   *   The thread ID to get the form for. If 0 is given, creation form will be
   *   rendered.
   *
   * @return \Drupal\Core\Ajax\AjaxResponse
   *   The response object.
   *
   * @throws \Drupal\Core\Form\EnforcedResponseException
   * @throws \Drupal\Core\Form\FormAjaxException
   */
  private function prepareThreadFormResponse(int $tid = 0): AjaxResponse {
    $response = new AjaxResponse();
    $form_state = new FormState();
    $form_state->addBuildInfo('args', [$tid]);
    $form = $this->formBuilder->buildForm(OpignoPrivateMessageThreadForm::class, $form_state);

    $build = [
      '#theme' => 'opigno_messaging_modal',
      '#title' => $tid ? $this->t('Edit discussion') : $this->t('New discussion'),
      '#body' => $form,
    ];

    $response->addCommand(new RemoveCommand('.modal-ajax'));
    $response->addCommand(new AppendCommand('body', $build));
    $response->addCommand(new InvokeCommand('.modal-ajax', 'modal', ['show']));

    return $response;
  }

  /**
   * Get the private messages thread create form.
   *
   * @return \Drupal\Core\Ajax\AjaxResponse
   *   The AJAX response object.
   *
   * @throws \Drupal\Core\Form\EnforcedResponseException
   * @throws \Drupal\Core\Form\FormAjaxException
   */
  public function getThreadForm(): AjaxResponse {
    return $this->prepareThreadFormResponse();
  }

  /**
   * Get the private messages thread edit form.
   *
   * @param \Drupal\private_message\Entity\PrivateMessageThreadInterface $private_message_thread
   *   The thread to get the form for.
   *
   * @return \Drupal\Core\Ajax\AjaxResponse
   *   The AJAX response object.
   *
   * @throws \Drupal\Core\Form\EnforcedResponseException
   * @throws \Drupal\Core\Form\FormAjaxException
   */
  public function getEditThreadForm(PrivateMessageThreadInterface $private_message_thread): AjaxResponse {
    $tid = (int) $private_message_thread->id();

    return $this->prepareThreadFormResponse($tid);
  }

  /**
   * Get the delete thread confirmation form.
   *
   * @param \Drupal\private_message\Entity\PrivateMessageThreadInterface $private_message_thread
   *   The thread to be deleted.
   *
   * @return \Drupal\Core\Ajax\AjaxResponse
   *   The AJAX response object.
   */
  public function getDeleteThreadForm(PrivateMessageThreadInterface $private_message_thread): AjaxResponse {
    $response = new AjaxResponse();
    $build = [
      '#theme' => 'opigno_messaging_confirmation',
      '#body' => $this->entityFormBuilder->getForm($private_message_thread, 'delete'),
    ];

    $response->addCommand(new RemoveCommand('.modal-ajax'));
    $response->addCommand(new AppendCommand('body', $build));
    $response->addCommand(new InvokeCommand('.modal-ajax', 'modal', ['show']));

    return $response;
  }

  /**
   * Close the modal.
   *
   * @return \Drupal\Core\Ajax\AjaxResponse
   *   The response object.
   */
  public function closeModal(): AjaxResponse {
    $response = new AjaxResponse();
    $response->addCommand(new InvokeCommand('.modal', 'modal', ['hide']));

    return $response;
  }

}
