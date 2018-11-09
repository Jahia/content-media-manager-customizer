import React from 'react';

var LanguageSwitcherDisplayOverridden;

const FLAG_BY_LANGUAGE = {
    en: "flag_great_britain.png",
    de: "flag_germany.png",
    fr: "flag_france.png",
}

class LanguageSwitcherDisplay extends React.Component {

    static setOverriddenComponent(languageSwitcherDisplayOverridden) {
        LanguageSwitcherDisplayOverridden = languageSwitcherDisplayOverridden;
    }

    render() {

        let {lang} = this.props;

        return <React.Fragment>
            <img src={"/css/images/flags/plain/" + FLAG_BY_LANGUAGE[lang]}/>
            <LanguageSwitcherDisplayOverridden {...this.props}/>
        </React.Fragment>;
    }
}

export {LanguageSwitcherDisplay};