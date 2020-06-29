import { HeadlinesState } from './news-center/state/headlines.state';
import { Component, HostBinding } from '@angular/core';
import countryFlagEmoji from 'country-flag-emoji';
import { AuthService } from './core/auth.service';
import { from, BehaviorSubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countryData = [];
  constructor(public auth: AuthService, public headlinesState: HeadlinesState) {
    const source = from([
      'us',
      'in',
      'au',
      'gb',
      'ae',
      'ar',
      'at',
      'be',
      'bg',
      'br',
      'ca',
      'ch',
      'cn',
      'co',
      'cu',
      'cz',
      'de',
      'eg',
      'es',
      'fr',
      'gr',
      'hk',
      'hu',
      'id',
      'ie',
      'il',
      'it',
      'jp',
      'kr',
      'lt',
      'lv',
      'ma',
      'mx',
      'my',
      'ng',
      'nl',
      'no',
      'nz',
      'ph',
      'pl',
      'pt',
      'ro',
      'rs',
      'ru',
      'sa',
      'se',
      'sg',
      'si',
      'sk',
      'sl',
      'th',
      'tr',
      'tw',
      'ua',
      've',
      'za'
    ]);
    source
      .pipe(
        map(code => {
          return countryFlagEmoji.get(code);
        }),
        tap(data => this.countryData.push(data))
      )
      .subscribe();
    console.log(this.countryData);
  }
  title = 'NewsApp';
  _opened: boolean = false;
  _modeNum: number = 0;
  _positionNum: number = 0;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = true;
  _closeOnClickBackdrop: boolean = false;
  _showBackdrop: boolean = false;
  _animate: boolean = true;
  _trapFocus: boolean = true;
  _autoFocus: boolean = true;
  _keyClose: boolean = false;
  _autoCollapseHeight: number = 500;
  _autoCollapseWidth: number = 500;

  _MODES: Array<string> = ['slide', 'over', 'push'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  selectNation(code) {
    this.headlinesState.setCode(code);
  }
  _toggleOpened(): void {
    this._opened = !this._opened;
  }

  _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  _toggleDock(): void {
    this._dock = !this._dock;
  }

  _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  _onOpened(): void {
    console.info('Sidebar opened');
  }

  _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  _onClosed(): void {
    console.info('Sidebar closed');
  }

  _onTransitionEnd(): void {
    console.info('Transition ended');
  }

  _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }

  
}
