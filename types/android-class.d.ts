declare class Uri {
  static parse(v: string): string;
}

declare class Settings {
  static ACTION_MANAGE_OVERLAY_PERMISSION: string;

  static canDrawOverlays(context: any): boolean;
}

declare class AudioManager {
  static STREAM_MUSIC: number;
  static ADJUST_UNMUTE: number;
  static ADJUST_MUTE: number;

  isStreamMute(streamType: number): boolean;
  adjustStreamVolume(streamType: number, direction: number, flags: number): void;
}

declare class Context {
  static AUDIO_SERVICE: string;

  startActivity(intent: any): void;
  getResources(): any;
  getSystemService(v: string): AudioManager;
}

interface AndroidClass {
  net: {
    Uri: Uri;
  };
  provider: {
    Settings: Settings;
  };
  content: {
    Context: Context;
  };
  media: {
    AudioManager: AudioManager;
  };
}

declare class Intent {
  static FLAG_ACTIVITY_NEW_TASK: string;

  constructor(setting: string, uri: string);

  addFlags(flag: string): void;
}

declare const context: Context;
declare const android: AndroidClass;
declare function importClass(clazz: any): void;