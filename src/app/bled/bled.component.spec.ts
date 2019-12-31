import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BledComponent} from './bled.component';
import {DemoMaterialModule} from "../../material.module";

describe('BledComponent', () => {
  let component: BledComponent;
  let fixture: ComponentFixture<BledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DemoMaterialModule],
      declarations: [BledComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change color of led when white to animation', () => {
    component.anime[0] = '';
    component.changeColor(0);
    expect(component.anime[0]).toEqual('animationgreen');
  });
  it('should not change color  of led when white to white', () => {
    component.anime[0] = '';
    component.changeColor(0);
    expect(component.anime[0]).not.toEqual('');
  });
  it('should  change color  of led when animationgreen to animationred', () => {
    component.anime[0] = 'animationgreen';
    component.changeColor(0);
    expect(component.anime[0]).toEqual('animationred');
  });
  it('should  change color  of led when animationred to animationblue', () => {
    component.anime[0] = 'animationred';
    component.changeColor(0);
    expect(component.anime[0]).toEqual('animationblue');
  });
  it('should  change color  of led when animationblue to animationwhite', () => {
    component.anime[0] = 'animationblue';
    component.changeColor(0);
    expect(component.anime[0]).toEqual('');
  });

});
