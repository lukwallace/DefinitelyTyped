import { Button } from 'bootstrap';
import * as $ from 'jquery';

const element = new Element();

// $ExpectType Button
new Button(element);

// $ExpectType Button | null
Button.getInstance(element);
// $ExpectType Button | null
Button.getOrCreateInstance(element);

// $ExpectType void
$('.alert').button();

// $ExpectType void
$('.alert').button('toggle');
