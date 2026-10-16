#!/bin/bash
# Двойной клик — поднимает сервер галереи (если ещё не поднят) и открывает её в браузере.
cd "$(dirname "$0")"

PORT=8080
URL="http://localhost:$PORT/generated-sites/"
LOG="$HOME/.claude/serve-8080.log"

if lsof -ti:"$PORT" >/dev/null 2>&1; then
    echo "Сервер уже работает на порту $PORT."
else
    echo "Стартую сервер галереи (порт $PORT)..."
    mkdir -p "$(dirname "$LOG")"
    nohup python3 -u serve.py >>"$LOG" 2>&1 &
    disown
    for i in $(seq 1 30); do
        lsof -ti:"$PORT" >/dev/null 2>&1 && break
        sleep 0.3
    done
    if ! lsof -ti:"$PORT" >/dev/null 2>&1; then
        echo "Не удалось запустить сервер — смотри лог: $LOG"
        read -n 1 -s -r -p "Нажми любую клавишу, чтобы закрыть окно..."
        exit 1
    fi
fi

echo "Открываю $URL"
open "$URL"

sleep 1
