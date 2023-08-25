export namespace model {
  export interface Account {
    id?: number
    name?: string
    mobile?: string
    role?: Role
    lastLoginAt?: string
  }

  export interface Role {
    id?: number
    name?: string
    permissions?: string[]
  }
}
