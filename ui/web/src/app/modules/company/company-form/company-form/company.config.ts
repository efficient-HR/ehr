import { FormlyFieldConfig } from '@ngx-formly/core';

export const companyConfig: FormlyFieldConfig[] = [
  {
    key: 'id',
    hide: true,
  },
  {
    key: 'name',
    type: 'input',
    props: {
      label: 'Name',
      required: true,
    },
  },
  {
    key: 'about',
    type: 'textarea',
    props: {
      label: 'About',
      required: true,
      rows: 3,
    },
  },
  {
    key: 'location',
    type: 'input',
    props: {
      label: 'Location',
      required: true,
    },
  },
];
