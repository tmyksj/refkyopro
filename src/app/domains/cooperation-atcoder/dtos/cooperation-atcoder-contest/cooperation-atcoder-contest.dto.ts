import { CooperationAtcoderTaskDto } from "../cooperation-atcoder-task/cooperation-atcoder-task.dto";

export interface CooperationAtcoderContestDto {

  readonly key: string;

  readonly taskList: CooperationAtcoderTaskDto[];

  readonly title: string;

}
