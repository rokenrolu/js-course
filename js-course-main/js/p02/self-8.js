let log = function (message) {
    console.log('[первый]', message);
    // Переопределяем переменную log на упрощённую версию
    log = function (msg) {
        console.log('[повтор]', msg);
    };
};

log('привет');   // [первый] привет
log('снова');    // [повтор] снова
log('и ещё');    // [повтор] и ещё