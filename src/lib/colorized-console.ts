enum Colors {
  RESET = '\x1b[0m',
  RED = '\x1b[31m',
  GREEN = '\x1b[32m',
  YELLOW = '\x1b[33m',
  BLUE = '\x1b[34m',
  MAGENTA = '\x1b[35m',
  CYAN = '\x1b[36m',
  WHITE = '\x1b[37m',
  DIM = '\x1b[2m',
}

type Message = TemplateStringsArray | string;

export function warn(message: Message) {
  console.warn(`${Colors.YELLOW}${message}${Colors.RESET}`);
}

export function error(message: Message) {
  console.error(`${Colors.RED}${message}${Colors.RESET}`);
}

export function tip(message: Message) {
  console.log(`${Colors.GREEN}${message}${Colors.RESET}`);
}

export { tip as info };
