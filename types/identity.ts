export interface IIdentityRequestTokenPayload {
  otp: string
  addr: string
  host: string
}

export interface IIdentityRequest {
  otp: string
  req: boolean
}
