# AtCoder Beginner Contest 057
## D - Maximum Average Sets
```cpp
#include <algorithm>
#include <functional>
#include <iomanip>
#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main() {
    int n, a, b;
    cin >> n >> a >> b;

    vector<long long> v(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }

    map<long long, int> v_cnt;
    for (int i = 0; i < n; i++) {
        v_cnt[v[i]]++;
    }

    sort(v.begin(), v.end(), greater<long long>());

    map<long long, int> v_rec;
    for (int i = 0; i < a; i++) {
        v_rec[v[i]]++;
    }

    if (v_rec.size() == 1) {
        for (int i = a; v[i - 1] == v[i] && i < n; i++) {
            v_rec[v[i]]++;
        }
    }

    long long sum = 0, size = 0;
    for (map<long long, int>::iterator i = v_rec.begin(); i != v_rec.end(); i++) {
        sum += i->first * i->second;
        size += i->second;
    }

    double avg = static_cast<double>(sum) / size;

    vector<vector<long long>> nck(n + 1, vector<long long>(n + 1, 0));
    nck[0][0] = 1;
    for (int i = 1; i <= n; i++) {
        nck[i][0] = nck[i][i] = 1;
        for (int j = 1; j < i; j++) {
            nck[i][j] = nck[i - 1][j - 1] + nck[i - 1][j];
        }
    }

    long long pat = 0;
    if (v_rec.size() == 1) {
        for (int i = a; i <= b && i <= n; i++) {
            pat += nck[v_cnt[v_rec.begin()->first]][i];
        }
    } else {
        pat = nck[v_cnt[v_rec.begin()->first]][v_rec.begin()->second];
    }

    cout << setprecision(12) << fixed << avg << endl;
    cout << pat << endl;
}
```
