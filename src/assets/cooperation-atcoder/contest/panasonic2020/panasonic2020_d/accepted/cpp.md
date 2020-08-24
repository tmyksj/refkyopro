# パナソニックプログラミングコンテスト2020
## D - String Equivalence
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

void solve(int n, int i, int m, vector<int>& s) {
    if (i < n) {
        for (int j = 0; j < m + 1; j++) {
            s[i] = j;
            solve(n, i + 1, max(j + 1, m), s);
        }
    } else {
        for (int i = 0; i < n; i++) {
            cout << static_cast<char>('a' + s[i]);
        }
        cout << endl;
    }
}

int main() {
    int n;
    cin >> n;

    vector<int> s(n, 0);
    solve(n, 0, 0, s);
}
```
