import {ContentListHeader} from './components/ContentListHeader';
import {FilesGridSizeSelector} from './components/FilesGridSizeSelector';
import {LanguageSwitcherDisplay} from './components/LanguageSwitcherDisplay';

// Approach 1: Replace the entire component class in the registry.
window.overrideCmmComponents({
    ContentListHeader: ContentListHeader,
    FilesGridSizeSelector: FilesGridSizeSelector,
    LanguageSwitcherDisplay: LanguageSwitcherDisplay
});

// Approach 2: Modify the prototype of the existing component  - does not work.
// window.overrideCmmComponent("./components/filesGrid/FilesGridSizeSelector", "default", FilesGridSizeSelector);