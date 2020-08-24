# AtCoder Beginner Contest 055
## D - Menagerie
```cpp
#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    map<string, int> m;
    m["SSS"] = 0;
    m["SSW"] = 1;
    m["SWS"] = 2;
    m["SWW"] = 3;
    m["WSS"] = 4;
    m["WSW"] = 5;
    m["WWS"] = 6;
    m["WWW"] = 7;

    vector<vector<int>> diag(n, vector<int>(8, -1));
    if (s[0] == 'o') {
        diag[0][m["SSS"]] = 40;
        diag[0][m["SWW"]] = 51;
        diag[0][m["WSW"]] = 62;
        diag[0][m["WWS"]] = 73;
    } else {
        diag[0][m["SSW"]] = 40;
        diag[0][m["SWS"]] = 51;
        diag[0][m["WSS"]] = 62;
        diag[0][m["WWW"]] = 73;
    }

    for (int i = 1; i < n; i++) {
        if (s[i] == 'o') {
            diag[i][m["SSS"]] =
                    (diag[i - 1][m["SSS"]] != -1 ? m["SSS"] : (diag[i - 1][m["WSS"]] != -1 ? m["WSS"] : -1));
            diag[i][m["SWW"]] =
                    (diag[i - 1][m["SSW"]] != -1 ? m["SSW"] : (diag[i - 1][m["WSW"]] != -1 ? m["WSW"] : -1));
            diag[i][m["WSW"]] =
                    (diag[i - 1][m["SWS"]] != -1 ? m["SWS"] : (diag[i - 1][m["WWS"]] != -1 ? m["WWS"] : -1));
            diag[i][m["WWS"]] =
                    (diag[i - 1][m["SWW"]] != -1 ? m["SWW"] : (diag[i - 1][m["WWW"]] != -1 ? m["WWW"] : -1));
        } else {
            diag[i][m["SSW"]] =
                    (diag[i - 1][m["SSS"]] != -1 ? m["SSS"] : (diag[i - 1][m["WSS"]] != -1 ? m["WSS"] : -1));
            diag[i][m["SWS"]] =
                    (diag[i - 1][m["SSW"]] != -1 ? m["SSW"] : (diag[i - 1][m["WSW"]] != -1 ? m["WSW"] : -1));
            diag[i][m["WSS"]] =
                    (diag[i - 1][m["SWS"]] != -1 ? m["SWS"] : (diag[i - 1][m["WWS"]] != -1 ? m["WWS"] : -1));
            diag[i][m["WWW"]] =
                    (diag[i - 1][m["SWW"]] != -1 ? m["SWW"] : (diag[i - 1][m["WWW"]] != -1 ? m["WWW"] : -1));
        }
    }

    int rev = -1;
    for (int i = 0; i < 8; i++) {
        int r = diag[n - 1][i];
        for (int j = n - 2; j >= 0 && r >= 0; j--) {
            r = diag[j][r];
        }

        if (r >= 0 && ((i < 4 && i == r % 10) || (i >= 4 && i == r / 10))) {
            rev = i;
        }
    }

    if (rev == -1) {
        cout << "-1" << endl;
    } else {
        vector<string> res(n);
        for (int i = n - 1, r = rev; i >= 0; i--) {
            res[i] = (diag[i][r] % 2 == 0 ? "S" : "W");
            r = diag[i][r];
        }

        for (int i = 0; i < n; i++) {
            cout << res[i];
        }
        cout << endl;
    }
}
```
