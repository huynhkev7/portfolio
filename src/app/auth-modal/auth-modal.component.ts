import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {

  p = '';
  show = false;
  projectService;
  constructor(projectService: ProjectService) {
    this.projectService = projectService;
  }

  ngOnInit() {
  }

  unlock() {
    if (!this.p) {
      alert('No passphase entered!');
    } else if (this.p && this.projectService.isMatch(this.p)) {
      this.show = true;
    } else {
      alert('Bad passphrase!');
    }
  }
}
