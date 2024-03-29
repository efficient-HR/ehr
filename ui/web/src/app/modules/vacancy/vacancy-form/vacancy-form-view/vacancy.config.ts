import { FormlyFieldConfig } from '@ngx-formly/core';

export const vacancyConfig: FormlyFieldConfig[] = [
  {
    key: 'id',
    hide: true,
  },
  {
    key: 'title',
    type: 'input',
    props: {
      label: 'Title',
      required: true,
    },
  },
  {
    key: 'description',
    type: 'textarea',
    props: {
      label: 'Description',
      required: true,
      rows: 3,
    },
  },
  {
    key: 'experience',
    type: 'input',
    props: {
      label: 'Experience',
      required: true,
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
  {
    key: 'skill',
    type: 'input',
    props: {
      label: 'Skill',
      required: true,
    },
  },
  {
    key: 'company.id',
    type: 'select',
    defaultValue: 'company.id',
    props: {
      label: 'Company',
      required: true,
      options: [
        { value: 1, label: 'Comp1' },
        { value: 5, label: 'Comp5' },
      ],
    },
  },
];
