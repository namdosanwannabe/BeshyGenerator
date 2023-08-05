'use-strict';

const input = document.querySelector('.input');
const result = document.querySelector('.result');

const message = document.querySelector('.hidden');
const closeMessage = document.querySelector('.close');

const btnGenerate = document.querySelector('.generate');
const btnCopy = document.querySelector('.copy');
const btnClear = document.querySelector('.clear');

const close = function () {
  message.classList.add('hidden');
};

btnGenerate.addEventListener('click', function () {
  const inputText = input.value;
  const output = inputText.replaceAll(' ', ' 🤸‍♂️ ');
  result.value = output;
});

btnCopy.addEventListener('click', function () {
  result.select();
  result.setSelectionRange(0, 99999);
  document.execCommand('copy');

  message.classList.remove('hidden');
});

btnClear.addEventListener('click', function () {
  input.value = '';
  result.value = '';
  message.classList.add('hidden');
});

closeMessage.addEventListener('click', close);
