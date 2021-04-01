export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  schema?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  use_env_variable?: string;
  database_url?: string;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
