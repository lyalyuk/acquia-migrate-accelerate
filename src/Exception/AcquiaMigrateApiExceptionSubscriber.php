<?php

namespace Drupal\acquia_migrate\Exception;

use Drupal\Core\EventSubscriber\HttpExceptionSubscriberBase;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;

/**
 * Handles Acquia Migrate API exceptions.
 *
 * @internal
 */
final class AcquiaMigrateApiExceptionSubscriber extends HttpExceptionSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function getHandledFormats() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function onException(GetResponseForExceptionEvent $event) {
    // ToDo. add polyfill or rewrite
    $throwable = $event->getException();
    if ($throwable instanceof AcquiaMigrateHttpExceptionInterface) {
      $event->setResponse($throwable->getHttpResponse());
    }
    else {
      parent::onException($event);
    }
  }

}
