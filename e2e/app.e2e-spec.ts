import { ElevenNoteangularsPage } from './app.po';

describe('eleven-noteangulars App', () => {
  let page: ElevenNoteangularsPage;

  beforeEach(() => {
    page = new ElevenNoteangularsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
