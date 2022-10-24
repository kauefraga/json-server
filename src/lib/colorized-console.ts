class Log {
  private colors = {
    red: '\x1b[31m%s\x1b[0m',
    green: '\x1b[32m%s\x1b[0m',
    yellow: '\x1b[33m%s\x1b[0m',
    blue: '\x1b[34m%s\x1b[0m',
    magenta: '\x1b[35m%s\x1b[0m',
    cyan: '\x1b[36m%s\x1b[0m',
    white: '\x1b[37m%s\x1b[0m',
    dim: '\x1b[2m%s\x1b[0m',
  };

  red(message: string) {
    console.log(this.colors.red, message);
  }

  green(message: string) {
    console.log(this.colors.green, message);
  }

  yellow(message: string) {
    console.log(this.colors.yellow, message);
  }

  blue(message: string) {
    console.log(this.colors.blue, message);
  }

  magenta(message: string) {
    console.log(this.colors.magenta, message);
  }

  cyan(message: string) {
    console.log(this.colors.cyan, message);
  }

  white(message: string) {
    console.log(this.colors.white, message);
  }

  dim(message: string) {
    console.log(this.colors.dim, message);
  }

  error(message: string) {
    console.error(this.colors.red, message);
  }

  warn(message: string) {
    console.warn(this.colors.yellow, message);
  }
}

const log = new Log();

export { log, Log };
