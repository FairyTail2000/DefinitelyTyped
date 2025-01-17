import { Editor } from '@ckeditor/ckeditor5-core';
import { PageBreak, PageBreakUI, PageBreakEditing } from '@ckeditor/ckeditor5-page-break';
import PageBreakCommand from '@ckeditor/ckeditor5-page-break/src/pagebreakcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

PageBreak.requires.forEach(Plugin => {
    (['Widget', 'PageBreakUI', 'PageBreakEditing'] as const).forEach(value => {
        Plugin.pluginName === value;
        // $ExpectError
        Plugin.pluginName === 'foo';
    });
    new Plugin(editor).init();
});
// $ExpectError
PageBreak.requires.length === 9;
new PageBreak(editor);

new PageBreakUI(editor).init();

new PageBreakEditing(editor).init();

new PageBreakCommand(editor).execute();
