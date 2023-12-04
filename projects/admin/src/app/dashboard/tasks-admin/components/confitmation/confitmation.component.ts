import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confitmation',
  templateUrl: './confitmation.component.html',
  styleUrls: ['./confitmation.component.scss']
})
export class ConfitmationComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<ConfitmationComponent>,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    this.matDialog.closeAll()
  }

  close() {
    this.dialog.close()
  }
}
