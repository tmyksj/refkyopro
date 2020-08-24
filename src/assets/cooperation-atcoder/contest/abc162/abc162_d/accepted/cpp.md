# AtCoder Beginner Contest 162
## D - RGB Triplets
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    vector<long long> cr(n, 0), cg(n, 0), cb(n, 0);
    for (int i = n - 1; i >= 0; i--) {
        cr[i] = (s[i] == 'R' ? 1 : 0) + (i < n - 1 ? cr[i + 1] : 0);
        cg[i] = (s[i] == 'G' ? 1 : 0) + (i < n - 1 ? cg[i + 1] : 0);
        cb[i] = (s[i] == 'B' ? 1 : 0) + (i < n - 1 ? cb[i + 1] : 0);
    }

    long long res = 0;
    for (int i = 0; i < n - 2; i++) {
        for (int j = i + 1; j < n - 1; j++) {
            res += ((s[i] == 'R' && s[j] == 'G') || (s[i] == 'G' && s[j] == 'R')
                    ? cb[j + 1] - (2 * j - i < n && s[2 * j - i] == 'B' ? 1 : 0) : 0);
            res += ((s[i] == 'R' && s[j] == 'B') || (s[i] == 'B' && s[j] == 'R')
                    ? cg[j + 1] - (2 * j - i < n && s[2 * j - i] == 'G' ? 1 : 0) : 0);
            res += ((s[i] == 'G' && s[j] == 'B') || (s[i] == 'B' && s[j] == 'G')
                    ? cr[j + 1] - (2 * j - i < n && s[2 * j - i] == 'R' ? 1 : 0) : 0);
        }
    }

    cout << res << endl;
}
```
