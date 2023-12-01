import React from 'react';

import { PHONE_NUMBER } from '../../../../../shared/config/constants';
import { formatPhoneNumber } from '../../../../../shared/lib/utils';
import { AppLink } from '../../../../../shared/ui/AppLink';

import './PhoneNumberCallout.scss';

/**
 * Компонент информации о номере телефона для звонков.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PhoneNumberCallout = () => {
  return (
    <div className="phone-number-callout">
      <AppLink target="_blank" type="gray" to={`tel:${PHONE_NUMBER}`}>
        {`${formatPhoneNumber(PHONE_NUMBER)}`}
      </AppLink>
      <p className="phone-number-callout__desc">Звонок бесплатный</p>
    </div>
  );
};

PhoneNumberCallout.propTypes = {};

export { PhoneNumberCallout };
