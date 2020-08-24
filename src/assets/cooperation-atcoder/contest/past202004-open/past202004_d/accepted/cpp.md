# 第二回 アルゴリズム実技検定
## D - パターンマッチ
```cpp
#include <iostream>
#include <string>

using namespace std;

bool match(string s, string t) {
    int s_size = s.size();
    int t_size = t.size();

    for (int i = 0; i + t_size - 1 < s_size; i++) {
        bool m = true;
        for (int j = 0; j < t_size; j++) {
            if (s[i + j] != t[j] && t[j] != '.') {
                m = false;
            }
        }

        if (m) {
            return true;
        }
    }

    return false;
}

int main() {
    string s;
    cin >> s;

    string p = "abcdefghijklmnopqrstuvwxyz.";
    int p_size = p.size();

    int res = 0;
    for (int i = 0; i < p_size; i++) {
        if (match(s, string({ p[i] }))) {
            res++;
        }

        for (int j = 0; j < p_size; j++) {
            if (match(s, string({ p[i], p[j] }))) {
                res++;
            }

            for (int k = 0; k < p_size; k++) {
                if (match(s, string({ p[i], p[j], p[k] }))) {
                    res++;
                }
            }
        }
    }

    cout << res << endl;
}
```
