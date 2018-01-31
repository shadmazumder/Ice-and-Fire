import {camelToNormalCase, renderListIfNecessary} from '../services';
import {camelCaseString, emptyList, listWithSomeEntry, normalCaseString } from "../__factory__";


test('Camel Case Test', () => {
    expect(camelToNormalCase(camelCaseString)).toBe(normalCaseString)
});

test("Test render list if necessary", ()=> {
  expect(renderListIfNecessary(emptyList)).toBe('');
  expect(renderListIfNecessary(listWithSomeEntry)).toBe('A, B, C');
  expect(renderListIfNecessary(camelCaseString)).toBe(camelCaseString);
  expect(renderListIfNecessary(normalCaseString)).toBe(normalCaseString);
})