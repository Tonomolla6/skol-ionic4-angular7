import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEndPage } from './game-end.page';

describe('GameEndPage', () => {
  let component: GameEndPage;
  let fixture: ComponentFixture<GameEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEndPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
