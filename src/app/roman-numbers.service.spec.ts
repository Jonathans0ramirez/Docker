import { TestBed } from '@angular/core/testing';

import { RomanNumbersService } from './roman-numbers.service';

describe('RomanNumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service).toBeTruthy();
  });
  it('El numero debe ser I', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(1)).toEqual('I');
  });
  it('El numero debe ser III', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(3)).toEqual('III');
  });
  it('El numero debe ser IV', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(4)).toEqual('IV');
  });
  it('El numero debe ser V', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(5)).toEqual('V');
  });
  it('El numero debe ser VI', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(6)).toEqual('VI');
  });
  it('El numero debe ser VIII', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(8)).toEqual('VIII');
  });
  it('El numero debe ser IX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(9)).toEqual('IX');
  });
  it('El numero debe ser X', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(10)).toEqual('X');
  });
  it('El numero debe ser XI', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(11)).toEqual('XI');
  });
  it('El numero debe ser XII', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(12)).toEqual('XII');
  });
  it('El numero debe ser XIV', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(14)).toEqual('XIV');
  });
  it('El numero debe ser XV', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(15)).toEqual('XV');
  });
  it('El numero debe ser XVI', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(16)).toEqual('XVI');
  });
  it('El numero debe ser XIX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(19)).toEqual('XIX');
  });
  it('El numero debe ser XXXIX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(39)).toEqual('XXXIX');
  });
  it('El numero debe ser XLIX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(49)).toEqual('XLIX');
  });
  it('El numero debe ser LXXXIX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(89)).toEqual('LXXXIX');
  });
  it('El numero debe ser XCIX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(99)).toEqual('XCIX');
  });
  it('El numero debe ser CCCXCIX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(399)).toEqual('CCCXCIX');
  });
  it('El numero debe ser CDXCIV', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(494)).toEqual('CDXCIV');
  });
  it('El numero debe ser MCDLXXVIII', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicoToRomano(1478)).toEqual('MCDLXXVIII');
  });
});