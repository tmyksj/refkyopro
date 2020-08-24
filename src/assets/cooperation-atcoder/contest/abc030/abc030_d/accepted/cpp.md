# AtCoder Beginner Contest 030
## D - へんてこ辞書
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool lt(string s, int t) {
    string ts = to_string(t);
    return s.size() < ts.size() || (s.size() == ts.size() && s < ts);
}

void sub(string& s, int t, int i) {
    if (t == 0) {
        return;
    }

    int c = (s[s.size() - i - 1] - '0') - (t % 10);
    s[s.size() - i - 1] = (c >= 0 ? c : c + 10) + '0';
    sub(s, t / 10 + (c >= 0 ? 0 : 1), i + 1);
}

int main() {
    int n, a;
    string k;
    cin >> n >> a >> k;

    vector<int> b(n);
    for (int i = 0; i < n; i++) {
        cin >> b[i];
    }

    int c = 0, d = 0;
    vector<int> e(n, -1);
    for (int i = 0, j = a - 1; ; i++, j = b[j] - 1) {
        if (e[j] < 0) {
            e[j] = i;
        } else {
            c = i - e[j];
            d = e[j];
            break;
        }
    }

    int res = a;
    if (lt(k, d)) {
        for (int i = 0; i < stoi(k); i++) {
            res = b[res - 1];
        }
    } else {
        sub(k, d, 0);

        long long m = 0;
        for (long long i = 0, j = 1; i < static_cast<int>(k.size()); i++, j *= 10, j %= c) {
            m += (k[k.size() - i - 1] - '0') * j;
            m %= c;
        }

        for (int i = 0; i < d + m; i++) {
            res = b[res - 1];
        }
    }

    cout << res << endl;
}
```
