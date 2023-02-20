const statusOfKeys = require('./statusOfKeys');
const spyConsoleLog = jest.spyOn(console, 'log');
spyConsoleLog.mockImplementation(keys => keys)

test('return True is statusOfKeys exists', function() {
    expect(statusOfKeys).toBeDefined()
})


test('test console log inside statusOfKeys', function() {
    statusOfKeys(true);
    expect(console.log).toBeCalled();
    expect(spyConsoleLog.mock.calls[0][0]).toBe(true);
    spyConsoleLog.mockReset();
    spyConsoleLog.mockReset();

})