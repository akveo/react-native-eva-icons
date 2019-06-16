import * as React from 'react';
import * as Svg from 'react-native-svg';

export const findIconByName = (
  name: string,
): React.ComponentType<Svg.SvgProps> | undefined => {
  switch (name) {
    case 'activity':
      return require('./Activity').default;

    case 'activity-outline':
      return require('./ActivityOutline').default;

    case 'alert-circle':
      return require('./AlertCircle').default;

    case 'alert-circle-outline':
      return require('./AlertCircleOutline').default;

    case 'alert-triangle':
      return require('./AlertTriangle').default;

    case 'alert-triangle-outline':
      return require('./AlertTriangleOutline').default;

    case 'archive':
      return require('./Archive').default;

    case 'archive-outline':
      return require('./ArchiveOutline').default;

    case 'arrow-back':
      return require('./ArrowBack').default;

    case 'arrow-back-outline':
      return require('./ArrowBackOutline').default;

    case 'arrow-circle-down':
      return require('./ArrowCircleDown').default;

    case 'arrow-circle-down-outline':
      return require('./ArrowCircleDownOutline').default;

    case 'arrow-circle-left':
      return require('./ArrowCircleLeft').default;

    case 'arrow-circle-left-outline':
      return require('./ArrowCircleLeftOutline').default;

    case 'arrow-circle-right':
      return require('./ArrowCircleRight').default;

    case 'arrow-circle-right-outline':
      return require('./ArrowCircleRightOutline').default;

    case 'arrow-circle-up':
      return require('./ArrowCircleUp').default;

    case 'arrow-circle-up-outline':
      return require('./ArrowCircleUpOutline').default;

    case 'arrow-down':
      return require('./ArrowDown').default;

    case 'arrow-down-outline':
      return require('./ArrowDownOutline').default;

    case 'arrow-downward':
      return require('./ArrowDownward').default;

    case 'arrow-downward-outline':
      return require('./ArrowDownwardOutline').default;

    case 'arrow-forward':
      return require('./ArrowForward').default;

    case 'arrow-forward-outline':
      return require('./ArrowForwardOutline').default;

    case 'arrow-ios-back':
      return require('./ArrowIosBack').default;

    case 'arrow-ios-back-outline':
      return require('./ArrowIosBackOutline').default;

    case 'arrow-ios-downward':
      return require('./ArrowIosDownward').default;

    case 'arrow-ios-downward-outline':
      return require('./ArrowIosDownwardOutline').default;

    case 'arrow-ios-forward':
      return require('./ArrowIosForward').default;

    case 'arrow-ios-forward-outline':
      return require('./ArrowIosForwardOutline').default;

    case 'arrow-ios-upward':
      return require('./ArrowIosUpward').default;

    case 'arrow-ios-upward-outline':
      return require('./ArrowIosUpwardOutline').default;

    case 'arrow-left':
      return require('./ArrowLeft').default;

    case 'arrow-left-outline':
      return require('./ArrowLeftOutline').default;

    case 'arrow-right':
      return require('./ArrowRight').default;

    case 'arrow-right-outline':
      return require('./ArrowRightOutline').default;

    case 'arrow-up':
      return require('./ArrowUp').default;

    case 'arrow-up-outline':
      return require('./ArrowUpOutline').default;

    case 'arrow-upward':
      return require('./ArrowUpward').default;

    case 'arrow-upward-outline':
      return require('./ArrowUpwardOutline').default;

    case 'arrowhead-down':
      return require('./ArrowheadDown').default;

    case 'arrowhead-down-outline':
      return require('./ArrowheadDownOutline').default;

    case 'arrowhead-left':
      return require('./ArrowheadLeft').default;

    case 'arrowhead-left-outline':
      return require('./ArrowheadLeftOutline').default;

    case 'arrowhead-right':
      return require('./ArrowheadRight').default;

    case 'arrowhead-right-outline':
      return require('./ArrowheadRightOutline').default;

    case 'arrowhead-up':
      return require('./ArrowheadUp').default;

    case 'arrowhead-up-outline':
      return require('./ArrowheadUpOutline').default;

    case 'at':
      return require('./At').default;

    case 'at-outline':
      return require('./AtOutline').default;

    case 'attach':
      return require('./Attach').default;

    case 'attach-outline':
      return require('./AttachOutline').default;

    case 'attach-2':
      return require('./Attach_2').default;

    case 'attach-2-outline':
      return require('./Attach_2Outline').default;

    case 'award':
      return require('./Award').default;

    case 'award-outline':
      return require('./AwardOutline').default;

    case 'backspace':
      return require('./Backspace').default;

    case 'backspace-outline':
      return require('./BackspaceOutline').default;

    case 'bar-chart':
      return require('./BarChart').default;

    case 'bar-chart-outline':
      return require('./BarChartOutline').default;

    case 'bar-chart-2':
      return require('./BarChart_2').default;

    case 'bar-chart-2-outline':
      return require('./BarChart_2Outline').default;

    case 'battery':
      return require('./Battery').default;

    case 'battery-outline':
      return require('./BatteryOutline').default;

    case 'behance':
      return require('./Behance').default;

    case 'behance-outline':
      return require('./BehanceOutline').default;

    case 'bell':
      return require('./Bell').default;

    case 'bell-off':
      return require('./BellOff').default;

    case 'bell-off-outline':
      return require('./BellOffOutline').default;

    case 'bell-outline':
      return require('./BellOutline').default;

    case 'bluetooth':
      return require('./Bluetooth').default;

    case 'bluetooth-outline':
      return require('./BluetoothOutline').default;

    case 'book':
      return require('./Book').default;

    case 'book-open':
      return require('./BookOpen').default;

    case 'book-open-outline':
      return require('./BookOpenOutline').default;

    case 'book-outline':
      return require('./BookOutline').default;

    case 'bookmark':
      return require('./Bookmark').default;

    case 'bookmark-outline':
      return require('./BookmarkOutline').default;

    case 'briefcase':
      return require('./Briefcase').default;

    case 'briefcase-outline':
      return require('./BriefcaseOutline').default;

    case 'browser':
      return require('./Browser').default;

    case 'browser-outline':
      return require('./BrowserOutline').default;

    case 'brush':
      return require('./Brush').default;

    case 'brush-outline':
      return require('./BrushOutline').default;

    case 'bulb':
      return require('./Bulb').default;

    case 'bulb-outline':
      return require('./BulbOutline').default;

    case 'calendar':
      return require('./Calendar').default;

    case 'calendar-outline':
      return require('./CalendarOutline').default;

    case 'camera':
      return require('./Camera').default;

    case 'camera-outline':
      return require('./CameraOutline').default;

    case 'car':
      return require('./Car').default;

    case 'car-outline':
      return require('./CarOutline').default;

    case 'cast':
      return require('./Cast').default;

    case 'cast-outline':
      return require('./CastOutline').default;

    case 'charging':
      return require('./Charging').default;

    case 'charging-outline':
      return require('./ChargingOutline').default;

    case 'checkmark':
      return require('./Checkmark').default;

    case 'checkmark-circle':
      return require('./CheckmarkCircle').default;

    case 'checkmark-circle-outline':
      return require('./CheckmarkCircleOutline').default;

    case 'checkmark-circle-2':
      return require('./CheckmarkCircle_2').default;

    case 'checkmark-circle-2-outline':
      return require('./CheckmarkCircle_2Outline').default;

    case 'checkmark-outline':
      return require('./CheckmarkOutline').default;

    case 'checkmark-square':
      return require('./CheckmarkSquare').default;

    case 'checkmark-square-outline':
      return require('./CheckmarkSquareOutline').default;

    case 'checkmark-square-2':
      return require('./CheckmarkSquare_2').default;

    case 'checkmark-square-2-outline':
      return require('./CheckmarkSquare_2Outline').default;

    case 'chevron-down':
      return require('./ChevronDown').default;

    case 'chevron-down-outline':
      return require('./ChevronDownOutline').default;

    case 'chevron-left':
      return require('./ChevronLeft').default;

    case 'chevron-left-outline':
      return require('./ChevronLeftOutline').default;

    case 'chevron-right':
      return require('./ChevronRight').default;

    case 'chevron-right-outline':
      return require('./ChevronRightOutline').default;

    case 'chevron-up':
      return require('./ChevronUp').default;

    case 'chevron-up-outline':
      return require('./ChevronUpOutline').default;

    case 'clipboard':
      return require('./Clipboard').default;

    case 'clipboard-outline':
      return require('./ClipboardOutline').default;

    case 'clock':
      return require('./Clock').default;

    case 'clock-outline':
      return require('./ClockOutline').default;

    case 'close':
      return require('./Close').default;

    case 'close-circle':
      return require('./CloseCircle').default;

    case 'close-circle-outline':
      return require('./CloseCircleOutline').default;

    case 'close-outline':
      return require('./CloseOutline').default;

    case 'close-square':
      return require('./CloseSquare').default;

    case 'close-square-outline':
      return require('./CloseSquareOutline').default;

    case 'cloud-download':
      return require('./CloudDownload').default;

    case 'cloud-download-outline':
      return require('./CloudDownloadOutline').default;

    case 'cloud-upload':
      return require('./CloudUpload').default;

    case 'cloud-upload-outline':
      return require('./CloudUploadOutline').default;

    case 'code':
      return require('./Code').default;

    case 'code-download':
      return require('./CodeDownload').default;

    case 'code-download-outline':
      return require('./CodeDownloadOutline').default;

    case 'code-outline':
      return require('./CodeOutline').default;

    case 'collapse':
      return require('./Collapse').default;

    case 'collapse-outline':
      return require('./CollapseOutline').default;

    case 'color-palette':
      return require('./ColorPalette').default;

    case 'color-palette-outline':
      return require('./ColorPaletteOutline').default;

    case 'color-picker':
      return require('./ColorPicker').default;

    case 'color-picker-outline':
      return require('./ColorPickerOutline').default;

    case 'compass':
      return require('./Compass').default;

    case 'compass-outline':
      return require('./CompassOutline').default;

    case 'copy':
      return require('./Copy').default;

    case 'copy-outline':
      return require('./CopyOutline').default;

    case 'corner-down-left':
      return require('./CornerDownLeft').default;

    case 'corner-down-left-outline':
      return require('./CornerDownLeftOutline').default;

    case 'corner-down-right':
      return require('./CornerDownRight').default;

    case 'corner-down-right-outline':
      return require('./CornerDownRightOutline').default;

    case 'corner-left-down':
      return require('./CornerLeftDown').default;

    case 'corner-left-down-outline':
      return require('./CornerLeftDownOutline').default;

    case 'corner-left-up':
      return require('./CornerLeftUp').default;

    case 'corner-left-up-outline':
      return require('./CornerLeftUpOutline').default;

    case 'corner-right-down':
      return require('./CornerRightDown').default;

    case 'corner-right-down-outline':
      return require('./CornerRightDownOutline').default;

    case 'corner-right-up':
      return require('./CornerRightUp').default;

    case 'corner-right-up-outline':
      return require('./CornerRightUpOutline').default;

    case 'corner-up-left':
      return require('./CornerUpLeft').default;

    case 'corner-up-left-outline':
      return require('./CornerUpLeftOutline').default;

    case 'corner-up-right':
      return require('./CornerUpRight').default;

    case 'corner-up-right-outline':
      return require('./CornerUpRightOutline').default;

    case 'credit-card':
      return require('./CreditCard').default;

    case 'credit-card-outline':
      return require('./CreditCardOutline').default;

    case 'crop':
      return require('./Crop').default;

    case 'crop-outline':
      return require('./CropOutline').default;

    case 'cube':
      return require('./Cube').default;

    case 'cube-outline':
      return require('./CubeOutline').default;

    case 'diagonal-arrow-left-down':
      return require('./DiagonalArrowLeftDown').default;

    case 'diagonal-arrow-left-down-outline':
      return require('./DiagonalArrowLeftDownOutline').default;

    case 'diagonal-arrow-left-up':
      return require('./DiagonalArrowLeftUp').default;

    case 'diagonal-arrow-left-up-outline':
      return require('./DiagonalArrowLeftUpOutline').default;

    case 'diagonal-arrow-right-down':
      return require('./DiagonalArrowRightDown').default;

    case 'diagonal-arrow-right-down-outline':
      return require('./DiagonalArrowRightDownOutline').default;

    case 'diagonal-arrow-right-up':
      return require('./DiagonalArrowRightUp').default;

    case 'diagonal-arrow-right-up-outline':
      return require('./DiagonalArrowRightUpOutline').default;

    case 'done-all':
      return require('./DoneAll').default;

    case 'done-all-outline':
      return require('./DoneAllOutline').default;

    case 'download':
      return require('./Download').default;

    case 'download-outline':
      return require('./DownloadOutline').default;

    case 'droplet':
      return require('./Droplet').default;

    case 'droplet-off':
      return require('./DropletOff').default;

    case 'droplet-off-outline':
      return require('./DropletOffOutline').default;

    case 'droplet-outline':
      return require('./DropletOutline').default;

    case 'edit':
      return require('./Edit').default;

    case 'edit-outline':
      return require('./EditOutline').default;

    case 'edit-2':
      return require('./Edit_2').default;

    case 'edit-2-outline':
      return require('./Edit_2Outline').default;

    case 'email':
      return require('./Email').default;

    case 'email-outline':
      return require('./EmailOutline').default;

    case 'expand':
      return require('./Expand').default;

    case 'expand-outline':
      return require('./ExpandOutline').default;

    case 'external-link':
      return require('./ExternalLink').default;

    case 'external-link-outline':
      return require('./ExternalLinkOutline').default;

    case 'eye':
      return require('./Eye').default;

    case 'eye-off':
      return require('./EyeOff').default;

    case 'eye-off-outline':
      return require('./EyeOffOutline').default;

    case 'eye-off-2':
      return require('./EyeOff_2').default;

    case 'eye-off-2-outline':
      return require('./EyeOff_2Outline').default;

    case 'eye-outline':
      return require('./EyeOutline').default;

    case 'facebook':
      return require('./Facebook').default;

    case 'facebook-outline':
      return require('./FacebookOutline').default;

    case 'file':
      return require('./File').default;

    case 'file-add':
      return require('./FileAdd').default;

    case 'file-add-outline':
      return require('./FileAddOutline').default;

    case 'file-outline':
      return require('./FileOutline').default;

    case 'file-remove':
      return require('./FileRemove').default;

    case 'file-remove-outline':
      return require('./FileRemoveOutline').default;

    case 'file-text':
      return require('./FileText').default;

    case 'file-text-outline':
      return require('./FileTextOutline').default;

    case 'film':
      return require('./Film').default;

    case 'film-outline':
      return require('./FilmOutline').default;

    case 'flag':
      return require('./Flag').default;

    case 'flag-outline':
      return require('./FlagOutline').default;

    case 'flash':
      return require('./Flash').default;

    case 'flash-off':
      return require('./FlashOff').default;

    case 'flash-off-outline':
      return require('./FlashOffOutline').default;

    case 'flash-outline':
      return require('./FlashOutline').default;

    case 'flip':
      return require('./Flip').default;

    case 'flip-outline':
      return require('./FlipOutline').default;

    case 'flip-2':
      return require('./Flip_2').default;

    case 'flip-2-outline':
      return require('./Flip_2Outline').default;

    case 'folder':
      return require('./Folder').default;

    case 'folder-add':
      return require('./FolderAdd').default;

    case 'folder-add-outline':
      return require('./FolderAddOutline').default;

    case 'folder-outline':
      return require('./FolderOutline').default;

    case 'folder-remove':
      return require('./FolderRemove').default;

    case 'folder-remove-outline':
      return require('./FolderRemoveOutline').default;

    case 'funnel':
      return require('./Funnel').default;

    case 'funnel-outline':
      return require('./FunnelOutline').default;

    case 'gift':
      return require('./Gift').default;

    case 'gift-outline':
      return require('./GiftOutline').default;

    case 'github':
      return require('./Github').default;

    case 'github-outline':
      return require('./GithubOutline').default;

    case 'globe':
      return require('./Globe').default;

    case 'globe-outline':
      return require('./GlobeOutline').default;

    case 'globe-2':
      return require('./Globe_2').default;

    case 'globe-2-outline':
      return require('./Globe_2Outline').default;

    case 'globe-3':
      return require('./Globe_3').default;

    case 'google':
      return require('./Google').default;

    case 'google-outline':
      return require('./GoogleOutline').default;

    case 'grid':
      return require('./Grid').default;

    case 'grid-outline':
      return require('./GridOutline').default;

    case 'hard-drive':
      return require('./HardDrive').default;

    case 'hard-drive-outline':
      return require('./HardDriveOutline').default;

    case 'hash':
      return require('./Hash').default;

    case 'hash-outline':
      return require('./HashOutline').default;

    case 'headphones':
      return require('./Headphones').default;

    case 'headphones-outline':
      return require('./HeadphonesOutline').default;

    case 'heart':
      return require('./Heart').default;

    case 'heart-outline':
      return require('./HeartOutline').default;

    case 'home':
      return require('./Home').default;

    case 'home-outline':
      return require('./HomeOutline').default;

    case 'image':
      return require('./Image').default;

    case 'image-outline':
      return require('./ImageOutline').default;

    case 'image-2':
      return require('./Image_2').default;

    case 'inbox':
      return require('./Inbox').default;

    case 'inbox-outline':
      return require('./InboxOutline').default;

    case 'info':
      return require('./Info').default;

    case 'info-outline':
      return require('./InfoOutline').default;

    case 'keypad':
      return require('./Keypad').default;

    case 'keypad-outline':
      return require('./KeypadOutline').default;

    case 'layers':
      return require('./Layers').default;

    case 'layers-outline':
      return require('./LayersOutline').default;

    case 'layout':
      return require('./Layout').default;

    case 'layout-outline':
      return require('./LayoutOutline').default;

    case 'link':
      return require('./Link').default;

    case 'link-outline':
      return require('./LinkOutline').default;

    case 'link-2':
      return require('./Link_2').default;

    case 'link-2-outline':
      return require('./Link_2Outline').default;

    case 'linkedin':
      return require('./Linkedin').default;

    case 'linkedin-outline':
      return require('./LinkedinOutline').default;

    case 'list':
      return require('./List').default;

    case 'list-outline':
      return require('./ListOutline').default;

    case 'loader-outline':
      return require('./LoaderOutline').default;

    case 'lock':
      return require('./Lock').default;

    case 'lock-outline':
      return require('./LockOutline').default;

    case 'log-in':
      return require('./LogIn').default;

    case 'log-in-outline':
      return require('./LogInOutline').default;

    case 'log-out':
      return require('./LogOut').default;

    case 'log-out-outline':
      return require('./LogOutOutline').default;

    case 'map':
      return require('./Map').default;

    case 'map-outline':
      return require('./MapOutline').default;

    case 'maximize':
      return require('./Maximize').default;

    case 'maximize-outline':
      return require('./MaximizeOutline').default;

    case 'menu':
      return require('./Menu').default;

    case 'menu-arrow':
      return require('./MenuArrow').default;

    case 'menu-arrow-outline':
      return require('./MenuArrowOutline').default;

    case 'menu-outline':
      return require('./MenuOutline').default;

    case 'menu-2':
      return require('./Menu_2').default;

    case 'menu-2-outline':
      return require('./Menu_2Outline').default;

    case 'message-circle':
      return require('./MessageCircle').default;

    case 'message-circle-outline':
      return require('./MessageCircleOutline').default;

    case 'message-square':
      return require('./MessageSquare').default;

    case 'message-square-outline':
      return require('./MessageSquareOutline').default;

    case 'mic':
      return require('./Mic').default;

    case 'mic-off':
      return require('./MicOff').default;

    case 'mic-off-outline':
      return require('./MicOffOutline').default;

    case 'mic-outline':
      return require('./MicOutline').default;

    case 'minimize':
      return require('./Minimize').default;

    case 'minimize-outline':
      return require('./MinimizeOutline').default;

    case 'minus':
      return require('./Minus').default;

    case 'minus-circle':
      return require('./MinusCircle').default;

    case 'minus-circle-outline':
      return require('./MinusCircleOutline').default;

    case 'minus-outline':
      return require('./MinusOutline').default;

    case 'minus-square':
      return require('./MinusSquare').default;

    case 'minus-square-outline':
      return require('./MinusSquareOutline').default;

    case 'monitor':
      return require('./Monitor').default;

    case 'monitor-outline':
      return require('./MonitorOutline').default;

    case 'moon':
      return require('./Moon').default;

    case 'moon-outline':
      return require('./MoonOutline').default;

    case 'more-horizontal':
      return require('./MoreHorizontal').default;

    case 'more-horizontal-outline':
      return require('./MoreHorizontalOutline').default;

    case 'more-vertical':
      return require('./MoreVertical').default;

    case 'more-vertical-outline':
      return require('./MoreVerticalOutline').default;

    case 'move':
      return require('./Move').default;

    case 'move-outline':
      return require('./MoveOutline').default;

    case 'music':
      return require('./Music').default;

    case 'music-outline':
      return require('./MusicOutline').default;

    case 'navigation':
      return require('./Navigation').default;

    case 'navigation-outline':
      return require('./NavigationOutline').default;

    case 'navigation-2':
      return require('./Navigation_2').default;

    case 'navigation-2-outline':
      return require('./Navigation_2Outline').default;

    case 'npm':
      return require('./Npm').default;

    case 'npm-outline':
      return require('./NpmOutline').default;

    case 'options':
      return require('./Options').default;

    case 'options-outline':
      return require('./OptionsOutline').default;

    case 'options-2':
      return require('./Options_2').default;

    case 'options-2-outline':
      return require('./Options_2Outline').default;

    case 'pantone':
      return require('./Pantone').default;

    case 'pantone-outline':
      return require('./PantoneOutline').default;

    case 'paper-plane':
      return require('./PaperPlane').default;

    case 'paper-plane-outline':
      return require('./PaperPlaneOutline').default;

    case 'pause-circle':
      return require('./PauseCircle').default;

    case 'pause-circle-outline':
      return require('./PauseCircleOutline').default;

    case 'people':
      return require('./People').default;

    case 'people-outline':
      return require('./PeopleOutline').default;

    case 'percent':
      return require('./Percent').default;

    case 'percent-outline':
      return require('./PercentOutline').default;

    case 'person':
      return require('./Person').default;

    case 'person-add':
      return require('./PersonAdd').default;

    case 'person-add-outline':
      return require('./PersonAddOutline').default;

    case 'person-delete':
      return require('./PersonDelete').default;

    case 'person-delete-outline':
      return require('./PersonDeleteOutline').default;

    case 'person-done':
      return require('./PersonDone').default;

    case 'person-done-outline':
      return require('./PersonDoneOutline').default;

    case 'person-outline':
      return require('./PersonOutline').default;

    case 'person-remove':
      return require('./PersonRemove').default;

    case 'person-remove-outline':
      return require('./PersonRemoveOutline').default;

    case 'phone':
      return require('./Phone').default;

    case 'phone-call':
      return require('./PhoneCall').default;

    case 'phone-call-outline':
      return require('./PhoneCallOutline').default;

    case 'phone-missed':
      return require('./PhoneMissed').default;

    case 'phone-missed-outline':
      return require('./PhoneMissedOutline').default;

    case 'phone-off':
      return require('./PhoneOff').default;

    case 'phone-off-outline':
      return require('./PhoneOffOutline').default;

    case 'phone-outline':
      return require('./PhoneOutline').default;

    case 'pie-chart':
      return require('./PieChart').default;

    case 'pie-chart-outline':
      return require('./PieChartOutline').default;

    case 'pie-chart-2':
      return require('./PieChart_2').default;

    case 'pin':
      return require('./Pin').default;

    case 'pin-outline':
      return require('./PinOutline').default;

    case 'play-circle':
      return require('./PlayCircle').default;

    case 'play-circle-outline':
      return require('./PlayCircleOutline').default;

    case 'plus':
      return require('./Plus').default;

    case 'plus-circle':
      return require('./PlusCircle').default;

    case 'plus-circle-outline':
      return require('./PlusCircleOutline').default;

    case 'plus-outline':
      return require('./PlusOutline').default;

    case 'plus-square':
      return require('./PlusSquare').default;

    case 'plus-square-outline':
      return require('./PlusSquareOutline').default;

    case 'power':
      return require('./Power').default;

    case 'power-outline':
      return require('./PowerOutline').default;

    case 'pricetags':
      return require('./Pricetags').default;

    case 'pricetags-outline':
      return require('./PricetagsOutline').default;

    case 'printer':
      return require('./Printer').default;

    case 'printer-outline':
      return require('./PrinterOutline').default;

    case 'question-mark':
      return require('./QuestionMark').default;

    case 'question-mark-circle':
      return require('./QuestionMarkCircle').default;

    case 'question-mark-circle-outline':
      return require('./QuestionMarkCircleOutline').default;

    case 'question-mark-outline':
      return require('./QuestionMarkOutline').default;

    case 'radio':
      return require('./Radio').default;

    case 'radio-button-off':
      return require('./RadioButtonOff').default;

    case 'radio-button-off-outline':
      return require('./RadioButtonOffOutline').default;

    case 'radio-button-on':
      return require('./RadioButtonOn').default;

    case 'radio-button-on-outline':
      return require('./RadioButtonOnOutline').default;

    case 'radio-outline':
      return require('./RadioOutline').default;

    case 'recording':
      return require('./Recording').default;

    case 'recording-outline':
      return require('./RecordingOutline').default;

    case 'refresh':
      return require('./Refresh').default;

    case 'refresh-outline':
      return require('./RefreshOutline').default;

    case 'repeat':
      return require('./Repeat').default;

    case 'repeat-outline':
      return require('./RepeatOutline').default;

    case 'rewind-left':
      return require('./RewindLeft').default;

    case 'rewind-left-outline':
      return require('./RewindLeftOutline').default;

    case 'rewind-right':
      return require('./RewindRight').default;

    case 'rewind-right-outline':
      return require('./RewindRightOutline').default;

    case 'save':
      return require('./Save').default;

    case 'save-outline':
      return require('./SaveOutline').default;

    case 'scissors':
      return require('./Scissors').default;

    case 'scissors-outline':
      return require('./ScissorsOutline').default;

    case 'search':
      return require('./Search').default;

    case 'search-outline':
      return require('./SearchOutline').default;

    case 'settings':
      return require('./Settings').default;

    case 'settings-outline':
      return require('./SettingsOutline').default;

    case 'settings-2':
      return require('./Settings_2').default;

    case 'settings-2-outline':
      return require('./Settings_2Outline').default;

    case 'shake':
      return require('./Shake').default;

    case 'shake-outline':
      return require('./ShakeOutline').default;

    case 'share':
      return require('./Share').default;

    case 'share-outline':
      return require('./ShareOutline').default;

    case 'shield':
      return require('./Shield').default;

    case 'shield-off':
      return require('./ShieldOff').default;

    case 'shield-off-outline':
      return require('./ShieldOffOutline').default;

    case 'shield-outline':
      return require('./ShieldOutline').default;

    case 'shopping-bag':
      return require('./ShoppingBag').default;

    case 'shopping-bag-outline':
      return require('./ShoppingBagOutline').default;

    case 'shopping-cart':
      return require('./ShoppingCart').default;

    case 'shopping-cart-outline':
      return require('./ShoppingCartOutline').default;

    case 'shuffle':
      return require('./Shuffle').default;

    case 'shuffle-outline':
      return require('./ShuffleOutline').default;

    case 'shuffle-2':
      return require('./Shuffle_2').default;

    case 'shuffle-2-outline':
      return require('./Shuffle_2Outline').default;

    case 'skip-back':
      return require('./SkipBack').default;

    case 'skip-back-outline':
      return require('./SkipBackOutline').default;

    case 'skip-forward':
      return require('./SkipForward').default;

    case 'skip-forward-outline':
      return require('./SkipForwardOutline').default;

    case 'slash':
      return require('./Slash').default;

    case 'slash-outline':
      return require('./SlashOutline').default;

    case 'smartphone':
      return require('./Smartphone').default;

    case 'smartphone-outline':
      return require('./SmartphoneOutline').default;

    case 'speaker':
      return require('./Speaker').default;

    case 'speaker-outline':
      return require('./SpeakerOutline').default;

    case 'square':
      return require('./Square').default;

    case 'square-outline':
      return require('./SquareOutline').default;

    case 'star':
      return require('./Star').default;

    case 'star-outline':
      return require('./StarOutline').default;

    case 'stop-circle':
      return require('./StopCircle').default;

    case 'stop-circle-outline':
      return require('./StopCircleOutline').default;

    case 'sun':
      return require('./Sun').default;

    case 'sun-outline':
      return require('./SunOutline').default;

    case 'swap':
      return require('./Swap').default;

    case 'swap-outline':
      return require('./SwapOutline').default;

    case 'sync':
      return require('./Sync').default;

    case 'sync-outline':
      return require('./SyncOutline').default;

    case 'text':
      return require('./Text').default;

    case 'text-outline':
      return require('./TextOutline').default;

    case 'thermometer':
      return require('./Thermometer').default;

    case 'thermometer-minus':
      return require('./ThermometerMinus').default;

    case 'thermometer-minus-outline':
      return require('./ThermometerMinusOutline').default;

    case 'thermometer-outline':
      return require('./ThermometerOutline').default;

    case 'thermometer-plus':
      return require('./ThermometerPlus').default;

    case 'thermometer-plus-outline':
      return require('./ThermometerPlusOutline').default;

    case 'toggle-left':
      return require('./ToggleLeft').default;

    case 'toggle-left-outline':
      return require('./ToggleLeftOutline').default;

    case 'toggle-right':
      return require('./ToggleRight').default;

    case 'toggle-right-outline':
      return require('./ToggleRightOutline').default;

    case 'trash':
      return require('./Trash').default;

    case 'trash-outline':
      return require('./TrashOutline').default;

    case 'trash-2':
      return require('./Trash_2').default;

    case 'trash-2-outline':
      return require('./Trash_2Outline').default;

    case 'trending-down':
      return require('./TrendingDown').default;

    case 'trending-down-outline':
      return require('./TrendingDownOutline').default;

    case 'trending-up':
      return require('./TrendingUp').default;

    case 'trending-up-outline':
      return require('./TrendingUpOutline').default;

    case 'tv':
      return require('./Tv').default;

    case 'tv-outline':
      return require('./TvOutline').default;

    case 'twitter':
      return require('./Twitter').default;

    case 'twitter-outline':
      return require('./TwitterOutline').default;

    case 'umbrella':
      return require('./Umbrella').default;

    case 'umbrella-outline':
      return require('./UmbrellaOutline').default;

    case 'undo':
      return require('./Undo').default;

    case 'undo-outline':
      return require('./UndoOutline').default;

    case 'unlock':
      return require('./Unlock').default;

    case 'unlock-outline':
      return require('./UnlockOutline').default;

    case 'upload':
      return require('./Upload').default;

    case 'upload-outline':
      return require('./UploadOutline').default;

    case 'video':
      return require('./Video').default;

    case 'video-off':
      return require('./VideoOff').default;

    case 'video-off-outline':
      return require('./VideoOffOutline').default;

    case 'video-outline':
      return require('./VideoOutline').default;

    case 'volume-down':
      return require('./VolumeDown').default;

    case 'volume-down-outline':
      return require('./VolumeDownOutline').default;

    case 'volume-mute':
      return require('./VolumeMute').default;

    case 'volume-mute-outline':
      return require('./VolumeMuteOutline').default;

    case 'volume-off':
      return require('./VolumeOff').default;

    case 'volume-off-outline':
      return require('./VolumeOffOutline').default;

    case 'volume-up':
      return require('./VolumeUp').default;

    case 'volume-up-outline':
      return require('./VolumeUpOutline').default;

    case 'wifi':
      return require('./Wifi').default;

    case 'wifi-off':
      return require('./WifiOff').default;

    case 'wifi-off-outline':
      return require('./WifiOffOutline').default;

    case 'wifi-outline':
      return require('./WifiOutline').default;
  }
};
