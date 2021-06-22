import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames, getPageUrl } from '../utils';
import Action from './Action';

export default class Header extends React.Component {
    renderNavLinks(navLinks, pageUrl) {
        return (
            <nav>
                {_.map(navLinks, (action, index) => {
                    const actionUrl = _.trim(_.get(action, 'url'), '/');
                    const classes = classNames('nav-link', {
                        'active': pageUrl === actionUrl
                    });
                    return <Action key={index} action={action} actionClass={classes} />;
                })}
            </nav>
        );
    }

    render() {
       
        return (
           
        );
    }
}
