interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['End User'],
  tenantRoles: ['Security Analyst', 'Data Scientist', 'Team Member', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'ControlAI v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read organization information',
    'Read model information',
    'Read attack and defense strategies',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage organization details',
    'Manage model data',
    'Manage attack and defense strategies',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a4b2da4f-b30a-40a7-b47f-381d80adf955',
};
