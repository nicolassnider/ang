import { DarkModePipe } from "./dark-mode.pipe";


describe('DarkModePie', () => {
  it('should return DarkMode if true', () => {
    const pipe = new DarkModePipe();
    expect(pipe.transform(true)).toBe('bg-dark text-light');
  });
  it('should return LightMode if false', () => {
    const pipe = new DarkModePipe();
    expect(pipe.transform(false)).toBe('bg-light text-dark');
  });
});
