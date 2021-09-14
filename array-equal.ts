type LogMsgType = (x: any) => string | void

const log = (msg: string): LogMsgType => 
  (val: any): void => console.log(msg, val)

log('hi')(2)








type Add2Type = (m: number) => number



const addTwoNumbers = (a: number): Add2Type =>
  (b: number): number => a + b;
console.log(addTwoNumbers(3)(4));