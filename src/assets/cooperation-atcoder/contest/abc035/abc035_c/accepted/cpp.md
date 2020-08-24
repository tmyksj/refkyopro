# AtCoder Beginner Contest 035
## C - オセロ
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> s(n + 1, 0);
    for (int i = 0; i < q; i++) {
        int l, r;
        cin >> l >> r;
        s[l - 1]++;
        s[r]--;
    }

    for (int i = 0; i < n; i++) {
        cout << s[i] % 2;
        s[i + 1] += s[i];
    }
    cout << endl;
}
```
