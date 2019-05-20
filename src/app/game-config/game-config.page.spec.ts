import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConfigPage } from './game-config.page';

describe('GameConfigPage', () => {
  let component: GameConfigPage;
  let fixture: ComponentFixture<GameConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameConfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
