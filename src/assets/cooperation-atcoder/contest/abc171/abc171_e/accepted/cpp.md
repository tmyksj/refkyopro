# AtCoder Beginner Contest 171
## E - Red Scarf
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int a_xor = 0;
    for (int i = 0; i < n; i++) {
        a_xor ^= a[i];
    }

    for (int i = 0; i < n; i++) {
        cout << (i == 0 ? "" : " ") << (a_xor ^ a[i]);
    }
    cout << endl;
}
```
