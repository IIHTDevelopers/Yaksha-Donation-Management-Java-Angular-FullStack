import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });
  describe("functional", ()=>{
  it('should have a title AngularFrontEnd', () => {
    expect(fixture.title).toEqual('AngularFrontEnd');
  });
});
});
