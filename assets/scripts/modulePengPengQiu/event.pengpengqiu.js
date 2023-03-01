
let s = cc.js.array.fastRemoveAt;

function handler() {
    this.callbacks = [];
    this.targets = [];
}
let obj = handler.prototype;

obj.add = function(t, e) {
    if (!this.has(t, e)) {
        this.callbacks.push(t);
        this.targets.push(e || null);
        return true;
    }
    return false;
}

obj.has = function(t, e) {
    for (let i = this.callbacks.length, n = 0; n < i; n++)
        if (this.callbacks[n] == t && this.targets[n] == e)
            return true;
    return false;
}

obj.removeTarget = function(t) {
    for (let e = this.targets.length, i = 0; i < e; ++i) {
        if (this.targets[i] == t) {
            s(this.targets, i);
            s(this.callbacks, i);
            --i;
            --e;
        }
    }
}

obj.invoke = function(e) {
    for (var i = this.targets.length, n = 0; n < i; ++n) {
        var o = this.callbacks[n],
            s = this.targets[n];
        o && s && o.apply(s, e)
    }
}

module.exports = {
    _map: cc.js.createMap(true),
    on(t, e, i) {
        this._map[t] = this._map[t] || new handler, this._map[t].add(e, i);
    },
    emit(t) {
        let i = this._map[t];
        let args = [];
        args.push(t);
        for (let j=1;j<arguments.length;j++) {
            args.push(arguments[j])
        }
        i && i.invoke(args);
    },
    offTarget(t) {
        for (let e in this._map) {
            let i = this._map[e];
            i && i.removeTarget(t);
        }
    },
    off(t, e) {
        let i = this._map[t];
        if (null !== i) {
            for (let n = 0; n < i.callbacks.length; n++) {
                var o = i.callbacks[n];
                if (o && o === e) {
                    s(i.targets, n);
                    s(i.callbacks, n);
                }
            }
            cc.error("事件移除失败", t)
        }
    },
    offEvent(t) {
        delete this._map[t];
    }
}
