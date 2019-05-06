export class TaskModel {
  public title: string;
  public description: string;
  public dueDate: Date;

  constructor($title: string, $description: string, $dueDate: Date) {
    this.title = $title;
    this.description = $description;
    this.dueDate = $dueDate;
  }

  // /**
  //  * Getter $title
  //  * @return {string}
  //  */
  // public get title(): string {
  //   return this.title;
  // }

  // /**
  //  * Getter $description
  //  * @return {string}
  //  */
  // public get description(): string {
  //   return this.description;
  // }

  // /**
  //  * Getter $due
  //  * @return {Date}
  //  */
  // public get dueDate(): Date {
  //   return this.dueDate;
  // }

  // /**
  //  * Setter $title
  //  * @param {string} value
  //  */
  // public set title(value: string) {
  //   this.title = value;
  // }

  // /**
  //  * Setter $description
  //  * @param {string} value
  //  */
  // public set description(value: string) {
  //   this.description = value;
  // }

  // /**
  //  * Setter $due
  //  * @param {Date} value
  //  */
  // public set dueDate(value: Date) {
  //   this.dueDate = value;
  // }
}
