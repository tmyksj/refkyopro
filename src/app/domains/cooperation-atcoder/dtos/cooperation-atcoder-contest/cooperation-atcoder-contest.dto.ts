import { CooperationAtcoderTaskDto } from "../cooperation-atcoder-task/cooperation-atcoder-task.dto";

export interface CooperationAtcoderContestDto {

  readonly duration: string;

  readonly key: string;

  readonly name: string;

  readonly taskList: CooperationAtcoderTaskDto[];

  readonly ratedRange: string;

  readonly startedAt: string;

}
