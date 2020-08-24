# AtCoder Beginner Contest 122
## C - GeT AC
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, q;
    string s;
    cin >> n >> q >> s;

    vector<int> ac(n, 0);
    for (int i = 1; i < n; i++) {
        if (s[i - 1] == 'A' && s[i] == 'C') {
            ac[i] = ac[i - 1] + 1;
        } else {
            ac[i] = ac[i - 1];
        }
    }

    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        cout << ac[r - 1] - ac[l - 1] << endl;
    }
}
```
