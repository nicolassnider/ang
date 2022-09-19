import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import {
	HttpClientTestingModule,
	HttpTestingController,
	TestRequest,
} from '@angular/common/http/testing';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { pokeListMock } from '../__mocks__/pokeList.mock';
import { PokeList } from '../poke/interfaces/pokeList.interface';
import { Sprites } from '../poke/interfaces/pokeData.interface';
import { pokeDataMock } from '../__mocks__/pokeData.mock';

describe('PokeService', () => {
	let service: PokeService;
	let httpClient: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PokeService],
		});
		httpClient = TestBed.inject(HttpTestingController);
		service = TestBed.inject(PokeService);
	});

	afterEach(() => {
		httpClient.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	it('should return pokelist', (done: DoneFn) => {
		const url = 'https://pokeapi.co/api/v2/pokemon/?limit=8&offset=0';
		service.getList().subscribe((res: PokeList) => {
			expect(res).toEqual(pokeListMock);
			expect(res.results.length).toBe(8);
			done();
		});
		httpClient.expectOne(url).flush(pokeListMock);
		/* const req:TestRequest=httpClient.expectOne(url)
		expect(req.request.url).toEqual(service.url);
		expect(req.request.urlWithParams).toEqual(url);
		expect(req.request.method).toEqual('GET');
		req.flush(pokeListMock); */
	});

	it('should return bulbasaur image', (done: DoneFn) => {
		const url = 'https://pokeapi.co/api/v2/pokemon/1';
		service.getPokeData('1').subscribe((res) => {
			expect(res).toEqual(pokeDataMock);
			done();
		});
		httpClient.expectOne(url).flush(pokeDataMock);
	});
});
