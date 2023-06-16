export const Routes = {
  home: () => '/',
  asset: (token: string) => '/assets/:token',
  assetEdit: (token: string) => '/assets/:token',
  assetCreate: () => '/assets/create',
}
