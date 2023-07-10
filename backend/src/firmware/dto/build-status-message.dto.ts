import { BuildStatus } from '@aws-sdk/client-gamelift';
import { FirmwareFile } from './firmware-files.dto';

export class BuildStatusMessage {
  public id: string;
  public buildStatus: BuildStatus;
  public message: string;

  public firmwareFiles?: FirmwareFile[];
}
