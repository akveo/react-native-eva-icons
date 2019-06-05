import React from 'react';
import Svg from 'react-native-svg';

export const findIconByName = (
  name: string,
): React.ReactElement<Svg.SvgProps> | undefined => {
  switch (name) {
    case 'activity-outline':
      return require('./activity-outline').default;

    case 'activity':
      return require('./activity').default;

    case 'alert-circle-outline':
      return require('./alert-circle-outline').default;

    case 'alert-circle':
      return require('./alert-circle').default;

    case 'alert-triangle-outline':
      return require('./alert-triangle-outline').default;

    case 'alert-triangle':
      return require('./alert-triangle').default;

    case 'archive-outline':
      return require('./archive-outline').default;

    case 'archive':
      return require('./archive').default;

    case 'arrow-back-outline':
      return require('./arrow-back-outline').default;

    case 'arrow-back':
      return require('./arrow-back').default;

    case 'arrow-circle-down-outline':
      return require('./arrow-circle-down-outline').default;

    case 'arrow-circle-down':
      return require('./arrow-circle-down').default;

    case 'arrow-circle-left-outline':
      return require('./arrow-circle-left-outline').default;

    case 'arrow-circle-left':
      return require('./arrow-circle-left').default;

    case 'arrow-circle-right-outline':
      return require('./arrow-circle-right-outline').default;

    case 'arrow-circle-right':
      return require('./arrow-circle-right').default;

    case 'arrow-circle-up-outline':
      return require('./arrow-circle-up-outline').default;

    case 'arrow-circle-up':
      return require('./arrow-circle-up').default;

    case 'arrow-down-outline':
      return require('./arrow-down-outline').default;

    case 'arrow-down':
      return require('./arrow-down').default;

    case 'arrow-downward-outline':
      return require('./arrow-downward-outline').default;

    case 'arrow-downward':
      return require('./arrow-downward').default;

    case 'arrow-forward-outline':
      return require('./arrow-forward-outline').default;

    case 'arrow-forward':
      return require('./arrow-forward').default;

    case 'arrow-ios-back-outline':
      return require('./arrow-ios-back-outline').default;

    case 'arrow-ios-back':
      return require('./arrow-ios-back').default;

    case 'arrow-ios-downward-outline':
      return require('./arrow-ios-downward-outline').default;

    case 'arrow-ios-downward':
      return require('./arrow-ios-downward').default;

    case 'arrow-ios-forward-outline':
      return require('./arrow-ios-forward-outline').default;

    case 'arrow-ios-forward':
      return require('./arrow-ios-forward').default;

    case 'arrow-ios-upward-outline':
      return require('./arrow-ios-upward-outline').default;

    case 'arrow-ios-upward':
      return require('./arrow-ios-upward').default;

    case 'arrow-left-outline':
      return require('./arrow-left-outline').default;

    case 'arrow-left':
      return require('./arrow-left').default;

    case 'arrow-right-outline':
      return require('./arrow-right-outline').default;

    case 'arrow-right':
      return require('./arrow-right').default;

    case 'arrow-up-outline':
      return require('./arrow-up-outline').default;

    case 'arrow-up':
      return require('./arrow-up').default;

    case 'arrow-upward-outline':
      return require('./arrow-upward-outline').default;

    case 'arrow-upward':
      return require('./arrow-upward').default;

    case 'arrowhead-down-outline':
      return require('./arrowhead-down-outline').default;

    case 'arrowhead-down':
      return require('./arrowhead-down').default;

    case 'arrowhead-left-outline':
      return require('./arrowhead-left-outline').default;

    case 'arrowhead-left':
      return require('./arrowhead-left').default;

    case 'arrowhead-right-outline':
      return require('./arrowhead-right-outline').default;

    case 'arrowhead-right':
      return require('./arrowhead-right').default;

    case 'arrowhead-up-outline':
      return require('./arrowhead-up-outline').default;

    case 'arrowhead-up':
      return require('./arrowhead-up').default;

    case 'at-outline':
      return require('./at-outline').default;

    case 'at':
      return require('./at').default;

    case 'attach-2-outline':
      return require('./attach-2-outline').default;

    case 'attach-2':
      return require('./attach-2').default;

    case 'attach-outline':
      return require('./attach-outline').default;

    case 'attach':
      return require('./attach').default;

    case 'award-outline':
      return require('./award-outline').default;

    case 'award':
      return require('./award').default;

    case 'backspace-outline':
      return require('./backspace-outline').default;

    case 'backspace':
      return require('./backspace').default;

    case 'bar-chart-2-outline':
      return require('./bar-chart-2-outline').default;

    case 'bar-chart-2':
      return require('./bar-chart-2').default;

    case 'bar-chart-outline':
      return require('./bar-chart-outline').default;

    case 'bar-chart':
      return require('./bar-chart').default;

    case 'battery-outline':
      return require('./battery-outline').default;

    case 'battery':
      return require('./battery').default;

    case 'behance-outline':
      return require('./behance-outline').default;

    case 'behance':
      return require('./behance').default;

    case 'bell-off-outline':
      return require('./bell-off-outline').default;

    case 'bell-off':
      return require('./bell-off').default;

    case 'bell-outline':
      return require('./bell-outline').default;

    case 'bell':
      return require('./bell').default;

    case 'bluetooth-outline':
      return require('./bluetooth-outline').default;

    case 'bluetooth':
      return require('./bluetooth').default;

    case 'book-open-outline':
      return require('./book-open-outline').default;

    case 'book-open':
      return require('./book-open').default;

    case 'book-outline':
      return require('./book-outline').default;

    case 'book':
      return require('./book').default;

    case 'bookmark-outline':
      return require('./bookmark-outline').default;

    case 'bookmark':
      return require('./bookmark').default;

    case 'briefcase-outline':
      return require('./briefcase-outline').default;

    case 'briefcase':
      return require('./briefcase').default;

    case 'browser-outline':
      return require('./browser-outline').default;

    case 'browser':
      return require('./browser').default;

    case 'brush-outline':
      return require('./brush-outline').default;

    case 'brush':
      return require('./brush').default;

    case 'bulb-outline':
      return require('./bulb-outline').default;

    case 'bulb':
      return require('./bulb').default;

    case 'calendar-outline':
      return require('./calendar-outline').default;

    case 'calendar':
      return require('./calendar').default;

    case 'camera-outline':
      return require('./camera-outline').default;

    case 'camera':
      return require('./camera').default;

    case 'car-outline':
      return require('./car-outline').default;

    case 'car':
      return require('./car').default;

    case 'cast-outline':
      return require('./cast-outline').default;

    case 'cast':
      return require('./cast').default;

    case 'charging-outline':
      return require('./charging-outline').default;

    case 'charging':
      return require('./charging').default;

    case 'checkmark-circle-2-outline':
      return require('./checkmark-circle-2-outline').default;

    case 'checkmark-circle-2':
      return require('./checkmark-circle-2').default;

    case 'checkmark-circle-outline':
      return require('./checkmark-circle-outline').default;

    case 'checkmark-circle':
      return require('./checkmark-circle').default;

    case 'checkmark-outline':
      return require('./checkmark-outline').default;

    case 'checkmark-square-2-outline':
      return require('./checkmark-square-2-outline').default;

    case 'checkmark-square-2':
      return require('./checkmark-square-2').default;

    case 'checkmark-square-outline':
      return require('./checkmark-square-outline').default;

    case 'checkmark-square':
      return require('./checkmark-square').default;

    case 'checkmark':
      return require('./checkmark').default;

    case 'chevron-down-outline':
      return require('./chevron-down-outline').default;

    case 'chevron-down':
      return require('./chevron-down').default;

    case 'chevron-left-outline':
      return require('./chevron-left-outline').default;

    case 'chevron-left':
      return require('./chevron-left').default;

    case 'chevron-right-outline':
      return require('./chevron-right-outline').default;

    case 'chevron-right':
      return require('./chevron-right').default;

    case 'chevron-up-outline':
      return require('./chevron-up-outline').default;

    case 'chevron-up':
      return require('./chevron-up').default;

    case 'clipboard-outline':
      return require('./clipboard-outline').default;

    case 'clipboard':
      return require('./clipboard').default;

    case 'clock-outline':
      return require('./clock-outline').default;

    case 'clock':
      return require('./clock').default;

    case 'close-circle-outline':
      return require('./close-circle-outline').default;

    case 'close-circle':
      return require('./close-circle').default;

    case 'close-outline':
      return require('./close-outline').default;

    case 'close-square-outline':
      return require('./close-square-outline').default;

    case 'close-square':
      return require('./close-square').default;

    case 'close':
      return require('./close').default;

    case 'cloud-download-outline':
      return require('./cloud-download-outline').default;

    case 'cloud-download':
      return require('./cloud-download').default;

    case 'cloud-upload-outline':
      return require('./cloud-upload-outline').default;

    case 'cloud-upload':
      return require('./cloud-upload').default;

    case 'code-download-outline':
      return require('./code-download-outline').default;

    case 'code-download':
      return require('./code-download').default;

    case 'code-outline':
      return require('./code-outline').default;

    case 'code':
      return require('./code').default;

    case 'collapse-outline':
      return require('./collapse-outline').default;

    case 'collapse':
      return require('./collapse').default;

    case 'color-palette-outline':
      return require('./color-palette-outline').default;

    case 'color-palette':
      return require('./color-palette').default;

    case 'color-picker-outline':
      return require('./color-picker-outline').default;

    case 'color-picker':
      return require('./color-picker').default;

    case 'compass-outline':
      return require('./compass-outline').default;

    case 'compass':
      return require('./compass').default;

    case 'copy-outline':
      return require('./copy-outline').default;

    case 'copy':
      return require('./copy').default;

    case 'corner-down-left-outline':
      return require('./corner-down-left-outline').default;

    case 'corner-down-left':
      return require('./corner-down-left').default;

    case 'corner-down-right-outline':
      return require('./corner-down-right-outline').default;

    case 'corner-down-right':
      return require('./corner-down-right').default;

    case 'corner-left-down-outline':
      return require('./corner-left-down-outline').default;

    case 'corner-left-down':
      return require('./corner-left-down').default;

    case 'corner-left-up-outline':
      return require('./corner-left-up-outline').default;

    case 'corner-left-up':
      return require('./corner-left-up').default;

    case 'corner-right-down-outline':
      return require('./corner-right-down-outline').default;

    case 'corner-right-down':
      return require('./corner-right-down').default;

    case 'corner-right-up-outline':
      return require('./corner-right-up-outline').default;

    case 'corner-right-up':
      return require('./corner-right-up').default;

    case 'corner-up-left-outline':
      return require('./corner-up-left-outline').default;

    case 'corner-up-left':
      return require('./corner-up-left').default;

    case 'corner-up-right-outline':
      return require('./corner-up-right-outline').default;

    case 'corner-up-right':
      return require('./corner-up-right').default;

    case 'credit-card-outline':
      return require('./credit-card-outline').default;

    case 'credit-card':
      return require('./credit-card').default;

    case 'crop-outline':
      return require('./crop-outline').default;

    case 'crop':
      return require('./crop').default;

    case 'cube-outline':
      return require('./cube-outline').default;

    case 'cube':
      return require('./cube').default;

    case 'diagonal-arrow-left-down-outline':
      return require('./diagonal-arrow-left-down-outline').default;

    case 'diagonal-arrow-left-down':
      return require('./diagonal-arrow-left-down').default;

    case 'diagonal-arrow-left-up-outline':
      return require('./diagonal-arrow-left-up-outline').default;

    case 'diagonal-arrow-left-up':
      return require('./diagonal-arrow-left-up').default;

    case 'diagonal-arrow-right-down-outline':
      return require('./diagonal-arrow-right-down-outline').default;

    case 'diagonal-arrow-right-down':
      return require('./diagonal-arrow-right-down').default;

    case 'diagonal-arrow-right-up-outline':
      return require('./diagonal-arrow-right-up-outline').default;

    case 'diagonal-arrow-right-up':
      return require('./diagonal-arrow-right-up').default;

    case 'done-all-outline':
      return require('./done-all-outline').default;

    case 'done-all':
      return require('./done-all').default;

    case 'download-outline':
      return require('./download-outline').default;

    case 'download':
      return require('./download').default;

    case 'droplet-off-outline':
      return require('./droplet-off-outline').default;

    case 'droplet-off':
      return require('./droplet-off').default;

    case 'droplet-outline':
      return require('./droplet-outline').default;

    case 'droplet':
      return require('./droplet').default;

    case 'edit-2-outline':
      return require('./edit-2-outline').default;

    case 'edit-2':
      return require('./edit-2').default;

    case 'edit-outline':
      return require('./edit-outline').default;

    case 'edit':
      return require('./edit').default;

    case 'email-outline':
      return require('./email-outline').default;

    case 'email':
      return require('./email').default;

    case 'expand-outline':
      return require('./expand-outline').default;

    case 'expand':
      return require('./expand').default;

    case 'external-link-outline':
      return require('./external-link-outline').default;

    case 'external-link':
      return require('./external-link').default;

    case 'eye-off-2-outline':
      return require('./eye-off-2-outline').default;

    case 'eye-off-2':
      return require('./eye-off-2').default;

    case 'eye-off-outline':
      return require('./eye-off-outline').default;

    case 'eye-off':
      return require('./eye-off').default;

    case 'eye-outline':
      return require('./eye-outline').default;

    case 'eye':
      return require('./eye').default;

    case 'facebook-outline':
      return require('./facebook-outline').default;

    case 'facebook':
      return require('./facebook').default;

    case 'file-add-outline':
      return require('./file-add-outline').default;

    case 'file-add':
      return require('./file-add').default;

    case 'file-outline':
      return require('./file-outline').default;

    case 'file-remove-outline':
      return require('./file-remove-outline').default;

    case 'file-remove':
      return require('./file-remove').default;

    case 'file-text-outline':
      return require('./file-text-outline').default;

    case 'file-text':
      return require('./file-text').default;

    case 'file':
      return require('./file').default;

    case 'film-outline':
      return require('./film-outline').default;

    case 'film':
      return require('./film').default;

    case 'flag-outline':
      return require('./flag-outline').default;

    case 'flag':
      return require('./flag').default;

    case 'flash-off-outline':
      return require('./flash-off-outline').default;

    case 'flash-off':
      return require('./flash-off').default;

    case 'flash-outline':
      return require('./flash-outline').default;

    case 'flash':
      return require('./flash').default;

    case 'flip-2-outline':
      return require('./flip-2-outline').default;

    case 'flip-2':
      return require('./flip-2').default;

    case 'flip-outline':
      return require('./flip-outline').default;

    case 'flip':
      return require('./flip').default;

    case 'folder-add-outline':
      return require('./folder-add-outline').default;

    case 'folder-add':
      return require('./folder-add').default;

    case 'folder-outline':
      return require('./folder-outline').default;

    case 'folder-remove-outline':
      return require('./folder-remove-outline').default;

    case 'folder-remove':
      return require('./folder-remove').default;

    case 'folder':
      return require('./folder').default;

    case 'funnel-outline':
      return require('./funnel-outline').default;

    case 'funnel':
      return require('./funnel').default;

    case 'gift-outline':
      return require('./gift-outline').default;

    case 'gift':
      return require('./gift').default;

    case 'github-outline':
      return require('./github-outline').default;

    case 'github':
      return require('./github').default;

    case 'globe-2-outline':
      return require('./globe-2-outline').default;

    case 'globe-2':
      return require('./globe-2').default;

    case 'globe-3':
      return require('./globe-3').default;

    case 'globe-outline':
      return require('./globe-outline').default;

    case 'globe':
      return require('./globe').default;

    case 'google-outline':
      return require('./google-outline').default;

    case 'google':
      return require('./google').default;

    case 'grid-outline':
      return require('./grid-outline').default;

    case 'grid':
      return require('./grid').default;

    case 'hard-drive-outline':
      return require('./hard-drive-outline').default;

    case 'hard-drive':
      return require('./hard-drive').default;

    case 'hash-outline':
      return require('./hash-outline').default;

    case 'hash':
      return require('./hash').default;

    case 'headphones-outline':
      return require('./headphones-outline').default;

    case 'headphones':
      return require('./headphones').default;

    case 'heart-outline':
      return require('./heart-outline').default;

    case 'heart':
      return require('./heart').default;

    case 'home-outline':
      return require('./home-outline').default;

    case 'home':
      return require('./home').default;

    case 'image-2':
      return require('./image-2').default;

    case 'image-outline':
      return require('./image-outline').default;

    case 'image':
      return require('./image').default;

    case 'inbox-outline':
      return require('./inbox-outline').default;

    case 'inbox':
      return require('./inbox').default;

    case 'info-outline':
      return require('./info-outline').default;

    case 'info':
      return require('./info').default;

    case 'keypad-outline':
      return require('./keypad-outline').default;

    case 'keypad':
      return require('./keypad').default;

    case 'layers-outline':
      return require('./layers-outline').default;

    case 'layers':
      return require('./layers').default;

    case 'layout-outline':
      return require('./layout-outline').default;

    case 'layout':
      return require('./layout').default;

    case 'link-2-outline':
      return require('./link-2-outline').default;

    case 'link-2':
      return require('./link-2').default;

    case 'link-outline':
      return require('./link-outline').default;

    case 'link':
      return require('./link').default;

    case 'linkedin-outline':
      return require('./linkedin-outline').default;

    case 'linkedin':
      return require('./linkedin').default;

    case 'list-outline':
      return require('./list-outline').default;

    case 'list':
      return require('./list').default;

    case 'loader-outline':
      return require('./loader-outline').default;

    case 'lock-outline':
      return require('./lock-outline').default;

    case 'lock':
      return require('./lock').default;

    case 'log-in-outline':
      return require('./log-in-outline').default;

    case 'log-in':
      return require('./log-in').default;

    case 'log-out-outline':
      return require('./log-out-outline').default;

    case 'log-out':
      return require('./log-out').default;

    case 'map-outline':
      return require('./map-outline').default;

    case 'map':
      return require('./map').default;

    case 'maximize-outline':
      return require('./maximize-outline').default;

    case 'maximize':
      return require('./maximize').default;

    case 'menu-2-outline':
      return require('./menu-2-outline').default;

    case 'menu-2':
      return require('./menu-2').default;

    case 'menu-arrow-outline':
      return require('./menu-arrow-outline').default;

    case 'menu-arrow':
      return require('./menu-arrow').default;

    case 'menu-outline':
      return require('./menu-outline').default;

    case 'menu':
      return require('./menu').default;

    case 'message-circle-outline':
      return require('./message-circle-outline').default;

    case 'message-circle':
      return require('./message-circle').default;

    case 'message-square-outline':
      return require('./message-square-outline').default;

    case 'message-square':
      return require('./message-square').default;

    case 'mic-off-outline':
      return require('./mic-off-outline').default;

    case 'mic-off':
      return require('./mic-off').default;

    case 'mic-outline':
      return require('./mic-outline').default;

    case 'mic':
      return require('./mic').default;

    case 'minimize-outline':
      return require('./minimize-outline').default;

    case 'minimize':
      return require('./minimize').default;

    case 'minus-circle-outline':
      return require('./minus-circle-outline').default;

    case 'minus-circle':
      return require('./minus-circle').default;

    case 'minus-outline':
      return require('./minus-outline').default;

    case 'minus-square-outline':
      return require('./minus-square-outline').default;

    case 'minus-square':
      return require('./minus-square').default;

    case 'minus':
      return require('./minus').default;

    case 'monitor-outline':
      return require('./monitor-outline').default;

    case 'monitor':
      return require('./monitor').default;

    case 'moon-outline':
      return require('./moon-outline').default;

    case 'moon':
      return require('./moon').default;

    case 'more-horizontal-outline':
      return require('./more-horizontal-outline').default;

    case 'more-horizontal':
      return require('./more-horizontal').default;

    case 'more-vertical-outline':
      return require('./more-vertical-outline').default;

    case 'more-vertical':
      return require('./more-vertical').default;

    case 'move-outline':
      return require('./move-outline').default;

    case 'move':
      return require('./move').default;

    case 'music-outline':
      return require('./music-outline').default;

    case 'music':
      return require('./music').default;

    case 'navigation-2-outline':
      return require('./navigation-2-outline').default;

    case 'navigation-2':
      return require('./navigation-2').default;

    case 'navigation-outline':
      return require('./navigation-outline').default;

    case 'navigation':
      return require('./navigation').default;

    case 'npm-outline':
      return require('./npm-outline').default;

    case 'npm':
      return require('./npm').default;

    case 'options-2-outline':
      return require('./options-2-outline').default;

    case 'options-2':
      return require('./options-2').default;

    case 'options-outline':
      return require('./options-outline').default;

    case 'options':
      return require('./options').default;

    case 'pantone-outline':
      return require('./pantone-outline').default;

    case 'pantone':
      return require('./pantone').default;

    case 'paper-plane-outline':
      return require('./paper-plane-outline').default;

    case 'paper-plane':
      return require('./paper-plane').default;

    case 'pause-circle-outline':
      return require('./pause-circle-outline').default;

    case 'pause-circle':
      return require('./pause-circle').default;

    case 'people-outline':
      return require('./people-outline').default;

    case 'people':
      return require('./people').default;

    case 'percent-outline':
      return require('./percent-outline').default;

    case 'percent':
      return require('./percent').default;

    case 'person-add-outline':
      return require('./person-add-outline').default;

    case 'person-add':
      return require('./person-add').default;

    case 'person-delete-outline':
      return require('./person-delete-outline').default;

    case 'person-delete':
      return require('./person-delete').default;

    case 'person-done-outline':
      return require('./person-done-outline').default;

    case 'person-done':
      return require('./person-done').default;

    case 'person-outline':
      return require('./person-outline').default;

    case 'person-remove-outline':
      return require('./person-remove-outline').default;

    case 'person-remove':
      return require('./person-remove').default;

    case 'person':
      return require('./person').default;

    case 'phone-call-outline':
      return require('./phone-call-outline').default;

    case 'phone-call':
      return require('./phone-call').default;

    case 'phone-missed-outline':
      return require('./phone-missed-outline').default;

    case 'phone-missed':
      return require('./phone-missed').default;

    case 'phone-off-outline':
      return require('./phone-off-outline').default;

    case 'phone-off':
      return require('./phone-off').default;

    case 'phone-outline':
      return require('./phone-outline').default;

    case 'phone':
      return require('./phone').default;

    case 'pie-chart-2':
      return require('./pie-chart-2').default;

    case 'pie-chart-outline':
      return require('./pie-chart-outline').default;

    case 'pie-chart':
      return require('./pie-chart').default;

    case 'pin-outline':
      return require('./pin-outline').default;

    case 'pin':
      return require('./pin').default;

    case 'play-circle-outline':
      return require('./play-circle-outline').default;

    case 'play-circle':
      return require('./play-circle').default;

    case 'plus-circle-outline':
      return require('./plus-circle-outline').default;

    case 'plus-circle':
      return require('./plus-circle').default;

    case 'plus-outline':
      return require('./plus-outline').default;

    case 'plus-square-outline':
      return require('./plus-square-outline').default;

    case 'plus-square':
      return require('./plus-square').default;

    case 'plus':
      return require('./plus').default;

    case 'power-outline':
      return require('./power-outline').default;

    case 'power':
      return require('./power').default;

    case 'pricetags-outline':
      return require('./pricetags-outline').default;

    case 'pricetags':
      return require('./pricetags').default;

    case 'printer-outline':
      return require('./printer-outline').default;

    case 'printer':
      return require('./printer').default;

    case 'question-mark-circle-outline':
      return require('./question-mark-circle-outline').default;

    case 'question-mark-circle':
      return require('./question-mark-circle').default;

    case 'question-mark-outline':
      return require('./question-mark-outline').default;

    case 'question-mark':
      return require('./question-mark').default;

    case 'radio-button-off-outline':
      return require('./radio-button-off-outline').default;

    case 'radio-button-off':
      return require('./radio-button-off').default;

    case 'radio-button-on-outline':
      return require('./radio-button-on-outline').default;

    case 'radio-button-on':
      return require('./radio-button-on').default;

    case 'radio-outline':
      return require('./radio-outline').default;

    case 'radio':
      return require('./radio').default;

    case 'recording-outline':
      return require('./recording-outline').default;

    case 'recording':
      return require('./recording').default;

    case 'refresh-outline':
      return require('./refresh-outline').default;

    case 'refresh':
      return require('./refresh').default;

    case 'repeat-outline':
      return require('./repeat-outline').default;

    case 'repeat':
      return require('./repeat').default;

    case 'rewind-left-outline':
      return require('./rewind-left-outline').default;

    case 'rewind-left':
      return require('./rewind-left').default;

    case 'rewind-right-outline':
      return require('./rewind-right-outline').default;

    case 'rewind-right':
      return require('./rewind-right').default;

    case 'save-outline':
      return require('./save-outline').default;

    case 'save':
      return require('./save').default;

    case 'scissors-outline':
      return require('./scissors-outline').default;

    case 'scissors':
      return require('./scissors').default;

    case 'search-outline':
      return require('./search-outline').default;

    case 'search':
      return require('./search').default;

    case 'settings-2-outline':
      return require('./settings-2-outline').default;

    case 'settings-2':
      return require('./settings-2').default;

    case 'settings-outline':
      return require('./settings-outline').default;

    case 'settings':
      return require('./settings').default;

    case 'shake-outline':
      return require('./shake-outline').default;

    case 'shake':
      return require('./shake').default;

    case 'share-outline':
      return require('./share-outline').default;

    case 'share':
      return require('./share').default;

    case 'shield-off-outline':
      return require('./shield-off-outline').default;

    case 'shield-off':
      return require('./shield-off').default;

    case 'shield-outline':
      return require('./shield-outline').default;

    case 'shield':
      return require('./shield').default;

    case 'shopping-bag-outline':
      return require('./shopping-bag-outline').default;

    case 'shopping-bag':
      return require('./shopping-bag').default;

    case 'shopping-cart-outline':
      return require('./shopping-cart-outline').default;

    case 'shopping-cart':
      return require('./shopping-cart').default;

    case 'shuffle-2-outline':
      return require('./shuffle-2-outline').default;

    case 'shuffle-2':
      return require('./shuffle-2').default;

    case 'shuffle-outline':
      return require('./shuffle-outline').default;

    case 'shuffle':
      return require('./shuffle').default;

    case 'skip-back-outline':
      return require('./skip-back-outline').default;

    case 'skip-back':
      return require('./skip-back').default;

    case 'skip-forward-outline':
      return require('./skip-forward-outline').default;

    case 'skip-forward':
      return require('./skip-forward').default;

    case 'slash-outline':
      return require('./slash-outline').default;

    case 'slash':
      return require('./slash').default;

    case 'smartphone-outline':
      return require('./smartphone-outline').default;

    case 'smartphone':
      return require('./smartphone').default;

    case 'speaker-outline':
      return require('./speaker-outline').default;

    case 'speaker':
      return require('./speaker').default;

    case 'square-outline':
      return require('./square-outline').default;

    case 'square':
      return require('./square').default;

    case 'star-outline':
      return require('./star-outline').default;

    case 'star':
      return require('./star').default;

    case 'stop-circle-outline':
      return require('./stop-circle-outline').default;

    case 'stop-circle':
      return require('./stop-circle').default;

    case 'sun-outline':
      return require('./sun-outline').default;

    case 'sun':
      return require('./sun').default;

    case 'swap-outline':
      return require('./swap-outline').default;

    case 'swap':
      return require('./swap').default;

    case 'sync-outline':
      return require('./sync-outline').default;

    case 'sync':
      return require('./sync').default;

    case 'text-outline':
      return require('./text-outline').default;

    case 'text':
      return require('./text').default;

    case 'thermometer-minus-outline':
      return require('./thermometer-minus-outline').default;

    case 'thermometer-minus':
      return require('./thermometer-minus').default;

    case 'thermometer-outline':
      return require('./thermometer-outline').default;

    case 'thermometer-plus-outline':
      return require('./thermometer-plus-outline').default;

    case 'thermometer-plus':
      return require('./thermometer-plus').default;

    case 'thermometer':
      return require('./thermometer').default;

    case 'toggle-left-outline':
      return require('./toggle-left-outline').default;

    case 'toggle-left':
      return require('./toggle-left').default;

    case 'toggle-right-outline':
      return require('./toggle-right-outline').default;

    case 'toggle-right':
      return require('./toggle-right').default;

    case 'trash-2-outline':
      return require('./trash-2-outline').default;

    case 'trash-2':
      return require('./trash-2').default;

    case 'trash-outline':
      return require('./trash-outline').default;

    case 'trash':
      return require('./trash').default;

    case 'trending-down-outline':
      return require('./trending-down-outline').default;

    case 'trending-down':
      return require('./trending-down').default;

    case 'trending-up-outline':
      return require('./trending-up-outline').default;

    case 'trending-up':
      return require('./trending-up').default;

    case 'tv-outline':
      return require('./tv-outline').default;

    case 'tv':
      return require('./tv').default;

    case 'twitter-outline':
      return require('./twitter-outline').default;

    case 'twitter':
      return require('./twitter').default;

    case 'umbrella-outline':
      return require('./umbrella-outline').default;

    case 'umbrella':
      return require('./umbrella').default;

    case 'undo-outline':
      return require('./undo-outline').default;

    case 'undo':
      return require('./undo').default;

    case 'unlock-outline':
      return require('./unlock-outline').default;

    case 'unlock':
      return require('./unlock').default;

    case 'upload-outline':
      return require('./upload-outline').default;

    case 'upload':
      return require('./upload').default;

    case 'video-off-outline':
      return require('./video-off-outline').default;

    case 'video-off':
      return require('./video-off').default;

    case 'video-outline':
      return require('./video-outline').default;

    case 'video':
      return require('./video').default;

    case 'volume-down-outline':
      return require('./volume-down-outline').default;

    case 'volume-down':
      return require('./volume-down').default;

    case 'volume-mute-outline':
      return require('./volume-mute-outline').default;

    case 'volume-mute':
      return require('./volume-mute').default;

    case 'volume-off-outline':
      return require('./volume-off-outline').default;

    case 'volume-off':
      return require('./volume-off').default;

    case 'volume-up-outline':
      return require('./volume-up-outline').default;

    case 'volume-up':
      return require('./volume-up').default;

    case 'wifi-off-outline':
      return require('./wifi-off-outline').default;

    case 'wifi-off':
      return require('./wifi-off').default;

    case 'wifi-outline':
      return require('./wifi-outline').default;

    case 'wifi':
      return require('./wifi').default;
  }
};
