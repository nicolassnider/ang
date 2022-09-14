import { TaskService } from './tasks.service';

describe('TaskService', () => {
	let service: TaskService;
	beforeEach(() => {
		service = new TaskService();
	});
	it('ToBe: should verify that tasks initializes on 3', () => {
		expect(service.tasks.length).toBe(3);
	});
	//test for deleteTask
	it('ToBe: should verify that tasks length is 2 after deleteTask', () => {
		service.deleteTask('Run');
		expect(service.tasks.length).toBe(2);
	});
	it('ToBe: should verify that tasks length is 3 after deleteTask that does not exist', () => {
		service.deleteTask('test');
		expect(service.tasks.length).toBe(3);
	});
	it('Spy: should call completeTask only once', () => {
		const spy = jasmine.createSpyObj('TaskService',['completeTask']);
		spy.completeTask('test');
		expect(spy.completeTask.calls.count()).toBe(1);
	});
});
