export enum TokenType {
  Illegal = "ILLEGAL",
  EOF = "EOF",
  Ident = "IDENT",
  Int = "INT",
  Assign = "=",
  Plus = "+",
  Minus = "-",
  Bang = "!",
  Asterix = "*",
  Slash = "/",
  LessThan = "<",
  GreaterThan = ">",
  Comma = ",",
  Semicolon = ";",
  LParen = "(",
  RParen = ")",
  LBrace = "{",
  RBrace = "}",
  Function = "FUNCTION",
  Let = "LET",
  True = "TRUE",
  False = "FALSE",
  If = "IF",
  Else = "ELSE",
  Return = "RETURN",
  Equal = "==",
  NotEqual = "!=",
}

export type Token = {
  type: TokenType;
  literal: string;
};

const keywords: { [keyword: string]: TokenType } = {
  fn: TokenType.Function,
  let: TokenType.Let,
  true: TokenType.True,
  false: TokenType.False,
  if: TokenType.If,
  else: TokenType.Else,
  return: TokenType.Return,
};

export function lookupIdentifier(identifier: string): TokenType {
  return keywords[identifier] || TokenType.Ident;
}
